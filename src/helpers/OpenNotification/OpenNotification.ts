import { notification } from 'antd';
import { NotificationProps } from './OpenNotificationType'


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
