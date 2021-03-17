import { Tabs } from 'antd';
import { memo } from 'react';
import { TPageTabsProps } from './PageTabsType';

const { TabPane } = Tabs;

export const PageTabs: React.FC<TPageTabsProps> = memo(
  ({ tabs, activeTab, onChangeTab }) => {
    const tabArr = Object.entries(tabs).map((tab: any) => {
      const [key, val] = tab;
      return { key, title: val.title };
    });

    // console.log(tabArr);

    return (
      <Tabs onChange={onChangeTab} activeKey={activeTab}>
        {tabArr.map((tab: any) => (
          <TabPane key={tab.key} tab={tab.title} />
        ))}
      </Tabs>
    );
  }
);
