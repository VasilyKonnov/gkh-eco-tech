import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAction, userSelector } from '../../store/user';
import { PageBaseView } from './PageBaseView';
import { Grid } from 'antd';
import './PageBase.css';
import { useState } from 'react';

const { useBreakpoint } = Grid;

export const PageBase: React.FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const currentMenu = pathname.split('/')[1];
  const user = useSelector(userSelector);
  const dispath = useDispatch();
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { lg, md } = useBreakpoint();

  function onChangeMenu(props: React.Attributes) {
    history.push(`/${props.key}`);
  }

  function toogleMobileMenu(bool: boolean) {
    setVisibleMenu(bool);
  }

  function handlerUserMenu(props: React.Attributes) {
    props.key === 'profile' && history.push(`/${props.key}`);
    props.key === 'logout' && dispath(userAction.logout());
  }

  return (
    <PageBaseView
      currentMenu={currentMenu}
      onChangeMenu={onChangeMenu}
      userPhone={user.phone}
      avatarUrl="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      toogleMobileMenu={toogleMobileMenu}
      visible={visibleMenu}
      hideUserMenu={!lg}
      hideNavMenu={!!md}
      handlerUserMenu={handlerUserMenu}
    />
  );
};
