import { TTabItem } from '../PageContent';

export type TPageTabsProps = {
  tabs: TTabItem;
  activeTab?: string;
  onChangeTab?: (key: string) => void;
};
