import { notification } from 'antd';

interface INotificationProps {
  text?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  title: string;
  duration?: number;
}

export const openNotification: React.FC<INotificationProps> = ({
  text,
  type = 'info',
  title,
  duration = 2,
}) =>
  notification[type]({
    message: title,
    description: text,
    duration,
  }) as any;
