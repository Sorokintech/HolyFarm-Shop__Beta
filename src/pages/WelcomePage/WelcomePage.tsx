import { FC } from "react";
import Header from "../../components/Header/Header";
import WelcomeBlock from "../../components/WelcomeBlock/WelcomeBlock";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import AccountBlock from "../../components/AccountBlock/AccountBlock";

const WelcomePage: FC = () => {
  return (
    <div className="welcome-page">
      <Header />
      <WelcomeBlock />
      <InfoBlock />
      <AccountBlock />
    </div>
  );
};
export default WelcomePage;
