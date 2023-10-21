import { FC } from "react";
import cn from "classnames";

import LogoImage from "../../../assets/images/logo.gif";

import "./Logo.scss";

const Logo: FC = () => {
  return (
    <div className="logo-block">
      <img src={LogoImage} alt="" className={cn("logo-block__image")} />
    </div>
  );
};
export default Logo;
