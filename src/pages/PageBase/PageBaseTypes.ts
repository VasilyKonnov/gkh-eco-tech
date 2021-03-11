import { INavMenuProps } from '../../components/NavMenu/NavMenuTypes';
import { IUserMenuProps } from '../../components/UserMenu/UserMenuType';


export type IPageBaseViewProps = {
	isAdmin: boolean,
	currentMenu: INavMenuProps['currentMenu'],
	onChangeMenu: INavMenuProps['onChangeMenu'],
	onLogout: IUserMenuProps['onLogout'],
	userPhone: IUserMenuProps['userPhone'],
	avatarUrl: IUserMenuProps['avatarUrl'],
}