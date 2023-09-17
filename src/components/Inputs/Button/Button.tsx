import cn from "classnames";
import { FC } from "react";
import "./Button.scss";
import { useThemeContext } from "../../../theme/Theme";
import { NavLink } from "react-router-dom";

interface IButton {
  text: string;
}

const Button: FC<IButton> = ({ text }) => {
  const { theme } = useThemeContext();
  return (
    <div className={cn("button", theme.name)}>
      <NavLink to="/" className={cn("button__link", theme.name)}>
        {text}
      </NavLink>
    </div>
  );
};
export default Button;
