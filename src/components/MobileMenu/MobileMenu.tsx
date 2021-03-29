import { Drawer } from 'antd';

type TMobileMenuProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  visible: boolean;
  onClose?: () => void;
};

export const MobileMenu: React.FC<TMobileMenuProps> = ({
  title,
  children,
  visible,
  onClose,
}) => (
  <Drawer
    title={title}
    placement="right"
    closable={false}
    onClose={onClose}
    visible={visible}
    bodyStyle={{ padding: 0 }}
    width={200}
  >
    {children}
  </Drawer>
);
