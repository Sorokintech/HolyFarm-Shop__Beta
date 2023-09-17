import { FC } from "react";

import "./AccountContent.scss";
import cn from "classnames";
import Button from "../../Inputs/Button/Button";
import { ShoppingCartIcon } from "../../../assets/icons/icons";
import { useThemeContext } from "../../../theme/Theme";
interface IAccountData {
  category: string;
  accounts: {
    id: string;
    icon: string;
    description: string;
    quantity: string;
    price: string;
  }[];
}

const AccountContent: FC<IAccountData> = ({ ...props }) => {
  const { theme } = useThemeContext();
  return (
    <div className={cn("account-content")}>
      <h3 className={cn("account-content__header")}>{props.category}</h3>
      <div className={cn("account-content__items")}>
        {props.accounts.map((item) => (
          <div className={cn("account-content__items__account")} id={item.id}>
            <img
              className={cn("account-content__items__account__icon")}
              src={item.icon}
              alt=""
            />
            <div className={cn("account-content__items__account__description")}>
              {item.description}
            </div>
            <div className={cn("account-content__items__account__quantity")}>
              {item.quantity} pcs.
            </div>
            <div className={cn("account-content__items__account__price")}>
              {item.price} $
            </div>
            <div className={cn("account-content__items__account__btn")}>
              <Button text={"Buy Now"} />
            </div>
            <div className={cn("account-content__items__account__cart")}>
              <ShoppingCartIcon className={cn(theme.icon_color)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AccountContent;
