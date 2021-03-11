export type NotificationProps = {
	text?: string;
	type?: 'success' | 'info' | 'warning' | 'error';
	title: string;
	duration?: number;
}