import { FC } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { useThemeContext } from "../../theme/Theme";

import {
  ShoppingCartIcon,
  AccountIcon,
  LightSwitchIcon,
  DarkSwitchIcon,
} from "../../assets/icons/icons";

import "./Header.scss";

const Header: FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div className={cn("header")}>
      <div className={cn("header-user-block")}>
        <div className={cn("header-user-block-item")}>
          <ShoppingCartIcon className={cn(theme.icon_color)} />
          <NavLink to="/" className={cn("header-user-block-item__link")}>
            My purchases
          </NavLink>
        </div>
        <div className={cn("header-user-block-item")}>
          <AccountIcon className={cn(theme.icon_color)} />
          <NavLink to="/" className={cn("header-user-block-item__link")}>
            My account
          </NavLink>
        </div>
      </div>
      <div className={cn("header-settings")}>
        <div className={cn("header-settings-item")} onClick={toggleTheme}>
          {theme.name !== "light" ? (
            <DarkSwitchIcon className={cn(theme.icon_color)} />
          ) : (
            <LightSwitchIcon className={cn(theme.icon_color)} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
