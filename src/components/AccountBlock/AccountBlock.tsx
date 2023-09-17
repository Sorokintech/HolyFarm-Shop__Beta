import { FC } from "react";
import "./AccountBlock.scss";
import Input from "../Inputs/Input/Input";
import AccountContent from "./AccountContent/AccountContent";
import {
  AccountMockData,
  AccountMockDataAnother,
  AccountMockDataOther,
} from "./AccountMockData/AccountMockData";

const AccountBlock: FC = () => {
  return (
    <div className="account-block">
      <div className="account-block-header">
        <div className="account-block-header__filter">
          <Input />
        </div>
        <div className="account-block-header__switch"></div>
      </div>
      <AccountContent {...AccountMockData} />
      <AccountContent {...AccountMockDataOther} />
      <AccountContent {...AccountMockDataAnother} />
    </div>
  );
};
export default AccountBlock;
