import { notification } from 'antd';

export interface NotificationProps {
  text?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  title: string;
  duration?: number;
}

export const openNotification: React.FC<NotificationProps> = ({
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
