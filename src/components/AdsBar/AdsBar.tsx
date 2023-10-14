import { FC } from "react";
import "./AdsBar.scss";
import { useThemeContext } from "../../theme/Theme";
import cn from "classnames";
// import AdsBlock from "./AdsBlock/AdsBlock";

// const mockAdFirst = {
//   logo: "/portugal-flag-icon.png",
//   header: "Get a discount",
//   text: "Join our Telegram",
//   buttonText: "Join",
// };
// const mockAdSecond = {
//   logo: "/spain-flag-icon.png",
//   header: "Get a discount",
//   text: "Join our Instagram",
//   buttonText: "Join",
// };

const AdsBar: FC = () => {
  const { theme } = useThemeContext();
  return (
    <div className={cn("AdsBar", theme.name)}>
      {/* <AdsBlock {...mockAdFirst} />
      <AdsBlock {...mockAdSecond} /> */}
    </div>
  );
};

export default AdsBar;
