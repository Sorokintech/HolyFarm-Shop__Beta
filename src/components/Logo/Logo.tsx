import { FC } from "react";
import cn from "classnames";

import LogoIcon from "../../assets/logo-scream.svg";

import "./Logo.scss";

const Logo: FC = () => {
  return (
    <div className="logo-block">
      <img src={LogoIcon} alt="" className={cn("logo-block__image")} />
      <div className={cn("logo-block__text")}>
        <p>Holy </p>
        <p>Farm </p>
        <p>Shop</p>
      </div>
    </div>
  );
};
export default Logo;
