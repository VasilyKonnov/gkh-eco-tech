export type TPages = {
  [key: string]: {
    title: string;
    content?: React.ReactNode;
    tabs?: TTabItem;
  };
};

export type TTabItem = {
  [key: string]: {
    title: string;
    content: React.ReactNode;
  };
};

export type TPageContentProps = {
  currentPage: string;
};
