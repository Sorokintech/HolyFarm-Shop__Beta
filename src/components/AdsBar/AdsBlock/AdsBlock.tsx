import { FC } from "react";

import "./AdsBlock.scss";
import cn from "classnames";
import { useThemeContext } from "../../../theme/Theme";
import Button from "../../Inputs/Button/Button";
interface IAdsBlock {
  logo: string;
  header: string;
  text: string;
  buttonText: string;
}

const AdsBlock: FC<IAdsBlock> = ({ ...props }) => {
  const { theme } = useThemeContext();
  return (
    <div className={cn("ads-block", theme.name)}>
      <img src={props.logo} alt="ads_logo" className={cn("ads-block__logo")} />
      <div className={cn("ads-block__content")}>
        <p className={cn("ads-block__content__header")}>{props.header}</p>
        <p className={cn("ads-block__content__info")}>{props.text}</p>
      </div>
      <Button text={props.buttonText} />
    </div>
  );
};
export default AdsBlock;
