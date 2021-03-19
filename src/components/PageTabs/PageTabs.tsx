import { memo } from 'react';
import { Tabs } from 'antd';
import { TPageTabsProps } from './PageTabsType';

const { TabPane } = Tabs;

export const PageTabs: React.FC<TPageTabsProps> = memo(
  ({ tabs, activeTab, onChangeTab }) => (
    <Tabs onChange={onChangeTab} activeKey={activeTab}>
      {Object.entries(tabs).map((tab: any) => {
        const [key, val] = tab;
        return <TabPane key={key} tab={val.title} />;
      })}
    </Tabs>
  )
);
