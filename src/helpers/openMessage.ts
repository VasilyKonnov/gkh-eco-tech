import { message } from 'antd';

interface IOpenMessageProps {
  text?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  key?: string;
}

export const openMessage: React.FC<IOpenMessageProps> = ({
  text,
  type = 'info',
  key,
}) => message[type](text, key);
