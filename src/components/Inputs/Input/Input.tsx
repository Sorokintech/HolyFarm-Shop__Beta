import cn from "classnames";
import { FC } from "react";
import "./Input.scss";

const Input: FC = () => {
  return (
    <label htmlFor="">
      <select name="" id="" className={cn("input")}>
        <option value="Select a category">Select a category:</option>
        <option value="Mark">Facebook Accounts with Good Farm</option>
        <option value="Kevin">
          Facebook accounts registered on mobile devices
        </option>
        <option value="Tony">
          Facebook accounts with Advertising Access Reinstated
        </option>
        <option value="Steven">
          Facebook accounts with a business manager
        </option>
        <option value="Lola">Other</option>
      </select>
    </label>
  );
};
export default Input;
