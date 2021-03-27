import { useEffect, useState, memo, useRef } from 'react'
import { HeadingPage } from '../HeadingPage/HeadingPage'
import { PageTabs } from '../PageTabs'
import { TabMetering } from '../TabMetering'
import { TabMeteringHistory } from '../TabMeteringHistory'
import { TPages, TPageContentProps } from './PageContentTypes'
import { TabTickets } from '../TabTickets'
import { TabTicketsHistory } from '../TabTicketsHistory'
import { TabNews } from '../TabNews'

const pages: TPages = {
  payments: {
    title: 'Начисления',
    content: 'Форма начислений',
  },
  metering: {
    title: 'Показания',
    tabs: {
      'send-meter-value': {
        title: 'Подать показания',
        content: <TabMetering />,
      },
      'metering-history': {
        title: 'История',
        content: <TabMeteringHistory />,
      },
    },
  },
  tickets: {
    title: 'Заявки',
    tabs: {
      'create-ticket': {
        title: 'Создание заявки',
        content: <TabTickets />,
      },
      'ticket-history': {
        title: 'История',
        content: <TabTicketsHistory />,
      },
    },
  },
  services: {
    title: 'Услуги',
    content: 'Форма услуг',
  },
  news: {
    title: '',
    content: <TabNews />,
  },
  admin: {
    title: 'Администратор',
    content: 'Форма администратора',
  },
}

const PageContent: React.FC<TPageContentProps> = ({ currentPage }) => {
  const [content, setContent] = useState<React.ReactNode>(null)
  const { title } = pages[currentPage]
  const pageHasTabs = useRef(false)
  const [tabs, setTabs] = useState({})
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    const { tabs } = pages[currentPage]
    if (tabs) {
      // default tab is first key
      const defaultTab = Object.keys(tabs)[0]
      const content = tabs[defaultTab]['content']
      pageHasTabs.current = true
      setActiveTab(defaultTab)
      setTabs(tabs)
      setContent(content)
    } else {
      const { content } = pages[currentPage]
      pageHasTabs.current = false
      setContent(content)
    }
  }, [currentPage])

  function onChangeTab(key: string) {
    if (key === activeTab) return
    setActiveTab(key)
    const { tabs } = pages[currentPage]
    setContent(tabs![key]['content'])
  }

  return (
    <>
      {title && <HeadingPage title={title} />}
      {pageHasTabs.current && (
        <PageTabs tabs={tabs} onChangeTab={onChangeTab} activeTab={activeTab} />
      )}
      {content}
    </>
  )
}

export default memo(PageContent)
