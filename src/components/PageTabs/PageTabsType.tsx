export type TTabItem = {
  title: 'string';
  content: 'string';
};
// FIXME: type any
export type TPageTabsProps = {
  tabs: any
  activeTab?: string;
  onChangeTab?: (key: string) => void;
};
