import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAction, userSelector } from '../../store/user';
import { PageBaseView } from './PageBaseView';
import './PageBase.css';

export const PageBase: React.FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const currentMenu = pathname.split('/')[1];
  const user = useSelector(userSelector);
  const dispath = useDispatch();

  function onChangeMenu(props: React.Attributes) {
    history.push(`/${props.key}`);
  }

  function onLogout() {
    dispath(userAction.logout());
  }

  return (
    <PageBaseView
      isAdmin={user.role === 'admin'}
      currentMenu={currentMenu}
      onChangeMenu={onChangeMenu}
      onLogout={onLogout}
      userPhone={user.phone}
      avatarUrl="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    />
  );
};
