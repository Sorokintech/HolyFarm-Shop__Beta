import { FC } from "react";
import { NavLink } from "react-router-dom";

import ContactUs from "../ContactUs/ContactUs";
import {
  HomeIcon,
  BlogIcon,
  ReferralIcon,
  ReplacementIcon,
} from "../../assets/icons/icons";

import Logo from "../Logo/Logo";

import "./NavBar.scss";

import { useThemeContext } from "../../theme/Theme";
import cn from "classnames";
const NavBar: FC = () => {
  const { theme } = useThemeContext();
  return (
    <div className={cn("navbar", theme.name)}>
      <Logo />
      <div className={cn("navbar-item")}>
        <HomeIcon className={cn(theme.icon_color)} />
        <NavLink to="/" className={cn("navbar-item__link")}>
          Main Page
        </NavLink>
      </div>
      <div className={cn("navbar-item")}>
        <BlogIcon className={cn(theme.icon_color)} />
        <NavLink to="/blog" className={cn("navbar-item__link")}>
          Blog
        </NavLink>
      </div>
      <div className={cn("navbar-item")}>
        <ReferralIcon className={cn(theme.icon_color)} />
        <NavLink to="/referral-program" className={cn("navbar-item__link")}>
          Рeferral Program
        </NavLink>
      </div>
      <div className={cn("navbar-item")}>
        <ReplacementIcon className={cn(theme.icon_color)} />
        <NavLink to="/replacement-rules" className={cn("navbar-item__link")}>
          Replacement Rules
        </NavLink>
      </div>
      <ContactUs />
    </div>
  );
};

export default NavBar;
