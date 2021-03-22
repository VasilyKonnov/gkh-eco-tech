import { Empty, ConfigProvider } from 'antd';

const CustomEmpty = (text: string = '') => (
  <div style={{ textAlign: 'center' }}>
    <Empty description={false} image={Empty.PRESENTED_IMAGE_SIMPLE} />
    <p>{text}</p>
  </div>
);

type TEmptyBoxProps = {
  text: string;
  children: React.ReactNode;
};

export const EmptyBox: React.FC<TEmptyBoxProps> = ({ text, children }) => (
  <ConfigProvider renderEmpty={CustomEmpty.bind(null, text)}>
    {children}
  </ConfigProvider>
);
