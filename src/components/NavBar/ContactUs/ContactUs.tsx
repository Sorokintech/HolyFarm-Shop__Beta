import { FC } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

// import { useThemeContext } from "../../../theme/Theme";

// import { TelegramIcon, EmailIcon } from "../../../assets/icons/icons";

import "./ContactUs.scss";

export const ContactUs: FC = () => {
  // const { theme } = useThemeContext();
  return (
    <div className={cn("contact-us")}>
      {/* <h3 className={cn("contact-us__header")}>Contacts</h3> */}
      <div className={cn("contact-us-item")}>
        {/* <TelegramIcon className={cn(theme.icon_color)} /> */}
        <NavLink to="/" className={cn("contact-us-item__link")}>
          Telegram support
        </NavLink>
      </div>
      <div className={cn("contact-us-item")}>
        {/* <EmailIcon className={cn(theme.icon_color)} /> */}
        <NavLink to="/" className={cn("contact-us-item__link")}>
          Email support
        </NavLink>
      </div>
    </div>
  );
};
export default ContactUs;
