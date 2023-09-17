import { FC, ReactNode } from "react";
import cn from "classnames";

import { useThemeContext } from "../../theme/Theme";

import "./PagesContainer.scss";

interface Props {
  children: ReactNode;
}

const PagesContainer: FC<Props> = ({ children }) => {
  const { theme } = useThemeContext();
  return <div className={cn("pages-container", theme.name)}>{children}</div>;
};

export default PagesContainer;
