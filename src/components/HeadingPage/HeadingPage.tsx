import { Typography } from 'antd';
import './HeadingPage.css';

type THeadingPageProps = {
  title: string;
};

export const HeadingPage: React.FC<THeadingPageProps> = ({ title }) => (
  <Typography.Title level={1} className="page-heading">
    {title}
  </Typography.Title>
);
