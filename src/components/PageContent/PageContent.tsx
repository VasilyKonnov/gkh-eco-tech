import { useCallback, useEffect, useState, memo, useRef } from 'react';
import { HeadingPage } from '../HeadingPage/HeadingPage';
import { PageTabs } from '../PageTabs';
import { TabMetering } from '../TabMetering';
import { TabMeteringHistory } from '../TabMeteringHistory';
import { TPages, TPageContentProps } from './PageContentTypes';

const PageContent: React.FC<TPageContentProps> = ({ currentPage }) => {
  const [content, setContent] = useState<React.ReactNode>(null);
  const getPageData = useCallback(() => {
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
            content: <div>Форма создания заявки</div>,
          },
          'ticket-history': {
            title: 'История',
            content: <div>Форма истории выполнения заявок</div>,
          },
        },
      },
      services: {
        title: 'Услуги',
        content: 'Форма услуг',
      },
      news: {
        title: 'Новости',
        content: 'Форма новостей',
      },
      admin: {
        title: 'Администратор',
        content: 'Форма администратора',
      },
    };
    return pages[currentPage];
  }, [currentPage]);
  const { title } = getPageData();
  const pageHasTabs = useRef(false);
  const [tabs, setTabs] = useState({});
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const { tabs } = getPageData();
    if (tabs) {
      // default tab is first key
      const defaultTab = Object.keys(tabs)[0];
      const content = tabs[defaultTab]['content'];
      pageHasTabs.current = true;
      setActiveTab(defaultTab);
      setTabs(tabs);
      setContent(content);
    } else {
      const { content } = getPageData();
      pageHasTabs.current = false;
      setContent(content);
    }
  }, [getPageData]);

  function onChangeTab(key: string) {
    if (key === activeTab) return;
    setActiveTab(key);
    const { tabs } = getPageData();
    setContent(tabs![key]['content']);
  }

  return (
    <>
      <HeadingPage title={title} />
      {pageHasTabs.current && (
        <PageTabs tabs={tabs} onChangeTab={onChangeTab} activeTab={activeTab} />
      )}
      {content}
    </>
  );
};

export default memo(PageContent);
