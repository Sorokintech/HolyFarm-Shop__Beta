import { FC } from "react";

import "./WelcomeBlock.scss";
import Logo from "../../assets/logo-scream.svg";
import { useThemeContext } from "../../theme/Theme";
import cn from "classnames";

const WelcomeBlock: FC = () => {
  const { theme } = useThemeContext();
  return (
    <div className={cn("welcome-block", theme.name)}>
      <div className={cn("welcome-block-logo")}>
        <img src={Logo} alt="" className={cn("welcome-block-logo__image")} />
      </div>
      <div className={cn("welcome-block-info", theme.name)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque:
        <div className={cn("welcome-block-info__text")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi
          quis nam, beatae assumenda natus? Non, sit modi! Atque, recusandae.
        </div>
        <div className={cn("welcome-block-info__text")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          eligendi error ratione, debitis porro magnam aliquid praesentium quas
          expedita rem velit natus, minima alias eius!
        </div>
      </div>
    </div>
  );
};
export default WelcomeBlock;
