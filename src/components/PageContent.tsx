import { useCallback, useEffect, useState, memo } from 'react';
import { HeadingPage } from './HeadingPage/HeadingPage';
import { PageTabs } from './PageTabs';
import { FormMeteringTab } from './FormMeteringTab';

type TPages = {
  [key: string]: {
    title: string;
    content?: any;
    // tabs?: {
    //   [key: string]: TTab;
    // };
    tabs?: any;
  };
};

// type TTab = {
//   [key: string]: {
//     title: 'string';
//     content: React.ReactNode;
//   };
// };

type TPageContentProps = {
  currentPage: string;
};

const PageContent: React.FC<TPageContentProps> = ({ currentPage }) => {
  const [content, setContent] = useState('');
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
            content: <FormMeteringTab />,
          },
          'metering-history': {
            title: 'История',
            content: <div>Форма истории подачи показаний</div>,
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
  const [pageHasTabs, setPageHasTabs] = useState(false);
  const [tabs, setTabs] = useState({});
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const { content: pageContent, tabs } = getPageData();
    if (tabs) {
      const defaultTab = Object.keys(tabs)[0];
      setPageHasTabs(true);
      setTabs(tabs);
      setActiveTab(defaultTab);
      setContent(tabs[defaultTab]['content']);
    } else {
      setPageHasTabs(false);
      setContent(pageContent);
    }
  }, [getPageData]);

  function onChangeTab(key: string) {
    if (key === activeTab) return;
    setActiveTab(key);
    const page = getPageData();
    setContent(page['tabs'][key]['content']);
  }
  // console.log('render page content');

  return (
    <>
      <HeadingPage title={title} />
      {pageHasTabs && (
        <PageTabs tabs={tabs} onChangeTab={onChangeTab} activeTab={activeTab} />
      )}
      {content}
    </>
  );
};

export default memo(PageContent);
