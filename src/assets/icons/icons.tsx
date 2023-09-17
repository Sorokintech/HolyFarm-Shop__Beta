import React from "react";

export const HomeIcon = ({ className = "" }) => (
  <svg
    width="1.325rem"
    viewBox="0 -0.5 21 21"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Page-1"
      stroke="none"
      stroke-width="0.1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Dribbble-Light-Preview"
        transform="translate(-419.000000, -720.000000)"
        fill={className}
      >
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path
            d="M379.79996,578 L376.649968,578 L376.649968,574 L370.349983,574 L370.349983,578 L367.19999,578 L367.19999,568.813 L373.489475,562.823 L379.79996,568.832 L379.79996,578 Z M381.899955,568.004 L381.899955,568 L381.899955,568 L373.502075,560 L363,569.992 L364.481546,571.406 L365.099995,570.813 L365.099995,580 L372.449978,580 L372.449978,576 L374.549973,576 L374.549973,580 L381.899955,580 L381.899955,579.997 L381.899955,570.832 L382.514204,571.416 L384.001,570.002 L381.899955,568.004 Z"
            id="home_icon"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export const AccountIcon = ({ className = "" }) => (
  <svg
    width="1.325rem"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="account_icon"
    stroke={className}
    stroke-width="2"
    fill="none"
  >
    <g>
      <circle cx="12" cy="7.25" r="5.73" />
      <path d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05" />
    </g>
  </svg>
);

export const BlogIcon = ({ className = "" }) => (
  <svg
    width="1.325rem"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="blog_icon"
    stroke-width="2"
    stroke={className}
    fill="none"
  >
    <path d="M10 18H14M7.20003 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V11.8C20 12.9201 20 13.4802 19.782 13.908C19.5903 14.2843 19.2843 14.5903 18.908 14.782C18.4802 15 17.9201 15 16.8 15H7.20003C6.07992 15 5.51987 15 5.09205 14.782C4.71572 14.5903 4.40976 14.2843 4.21801 13.908C4.00003 13.4802 4.00003 12.9201 4.00003 11.8V6.2C4.00003 5.0799 4.00003 4.51984 4.21801 4.09202C4.40976 3.71569 4.71572 3.40973 5.09205 3.21799C5.51987 3 6.07992 3 7.20003 3ZM4.58888 21H19.4112C20.2684 21 20.697 21 20.9551 20.8195C21.1805 20.6618 21.3311 20.4183 21.3713 20.1462C21.4173 19.8345 21.2256 19.4512 20.8423 18.6845L20.3267 17.6534C19.8451 16.6902 19.6043 16.2086 19.2451 15.8567C18.9274 15.5456 18.5445 15.309 18.1241 15.164C17.6488 15 17.1103 15 16.0335 15H7.96659C6.88972 15 6.35128 15 5.87592 15.164C5.45554 15.309 5.07266 15.5456 4.75497 15.8567C4.39573 16.2086 4.15493 16.6902 3.67334 17.6534L3.1578 18.6845C2.77444 19.4512 2.58276 19.8345 2.6288 20.1462C2.669 20.4183 2.81952 20.6618 3.04492 20.8195C3.30306 21 3.73166 21 4.58888 21Z" />
  </svg>
);
export const DarkThemeIcon = () => (
  <svg
    width="1.325rem"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="dark_theme_icon"
    stroke="#000"
    stroke-width="1"
    fill="none"
  >
    <path
      d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const EmailIcon = ({ className = "" }) => (
  <svg
    width="1.325rem"
    viewBox="0 0 1920 1920"
    xmlns="http://www.w3.org/2000/svg"
    id="email_icon"
    stroke={className}
    stroke-width="1"
    fill={className}
  >
    <path
      d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
      fill-rule="evenodd"
    />
  </svg>
);

export const ReferralIcon = ({ className = "" }) => (
  <svg
    width="1.325rem"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="referral_icon"
    stroke={className}
    stroke-width="0.1"
    fill={className}
  >
    <path d="M5,22a4,4,0,0,0,3.858-3h6.284a4.043,4.043,0,1,0,2.789-4.837L14.816,8.836a4,4,0,1,0-5.63,0L6.078,14.166A3.961,3.961,0,0,0,5,14a4,4,0,0,0,0,8Zm14-6a2,2,0,1,1-2,2A2,2,0,0,1,19,16ZM12,4a2,2,0,1,1-2,2A2,2,0,0,1,12,4ZM10.922,9.834A3.961,3.961,0,0,0,12,10a3.909,3.909,0,0,0,1.082-.168l3.112,5.323A4,4,0,0,0,15.142,17H8.858a3.994,3.994,0,0,0-1.044-1.838ZM5,16a2,2,0,1,1-2,2A2,2,0,0,1,5,16Z" />
  </svg>
);

export const ReplacementIcon = ({ className = "" }) => (
  <svg
    width="1.325rem"
    viewBox="0 0 52 52"
    enable-background="new 0 0 52 52"
    xmlns="http://www.w3.org/2000/svg"
    id="replacement_icon"
    stroke={className}
    stroke-width="0.1"
    fill={className}
  >
    <path
      d="M20,37.5c0-0.8-0.7-1.5-1.5-1.5h-15C2.7,36,2,36.7,2,37.5v11C2,49.3,2.7,50,3.5,50h15c0.8,0,1.5-0.7,1.5-1.5
	V37.5z"
    />
    <path
      d="M8.1,22H3.2c-1,0-1.5,0.9-0.9,1.4l8,8.3c0.4,0.3,1,0.3,1.4,0l8-8.3c0.6-0.6,0.1-1.4-0.9-1.4h-4.7
	c0-5,4.9-10,9.9-10V6C15,6,8.1,13,8.1,22z"
    />
    <path
      d="M41.8,20.3c-0.4-0.3-1-0.3-1.4,0l-8,8.3c-0.6,0.6-0.1,1.4,0.9,1.4h4.8c0,6-4.1,10-10.1,10v6
	c9,0,16.1-7,16.1-16H49c1,0,1.5-0.9,0.9-1.4L41.8,20.3z"
    />
    <path
      d="M50,3.5C50,2.7,49.3,2,48.5,2h-15C32.7,2,32,2.7,32,3.5v11c0,0.8,0.7,1.5,1.5,1.5h15c0.8,0,1.5-0.7,1.5-1.5
	V3.5z"
    />
  </svg>
);

export const ShoppingCartIcon = ({ className = "" }) => (
  <svg
    width="1.325rem"
    viewBox="0 -0.5 20 20"
    xmlns="http://www.w3.org/2000/svg"
    stroke={className}
    stroke-width="1"
    fill="none"
  >
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="shopping_cart_icon"
        transform="translate(-60.000000, -3200.000000)"
        fill={className}
      >
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path d="M15.701,3054.81641 C14.115,3056.27579 13.842,3056.62159 11.852,3054.7663 C9.237,3052.33065 12.066,3049.6725 13.688,3051.73327 C13.746,3051.80845 13.862,3051.80644 13.92,3051.73227 C15.506,3049.70357 18.427,3052.31161 15.701,3054.81641 L15.701,3054.81641 Z M19.306,3056.95236 L8.694,3056.95236 L7.361,3048.93379 L20.639,3048.93379 L19.306,3056.95236 L19.306,3056.95236 Z M21,3046.92915 L16.976,3039.96803 L15.244,3040.95932 L18.691,3046.92915 L9.309,3046.92915 L12.755,3040.97035 L11.023,3039.957 L7,3046.92915 L4,3046.92915 L4,3048.93379 L5.333,3048.93379 L7,3058.957 L21,3058.957 L22.667,3048.93379 L24,3048.93379 L24,3046.92915 L21,3046.92915 L21,3046.92915 Z"></path>
        </g>
      </g>
    </g>
  </svg>
);

export const TelegramIcon = ({ className = "" }) => (
  <svg
    width="1.325rem"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="telegram_icon"
    stroke={className}
    stroke-width="0.1"
    fill={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
    />
  </svg>
);

export const DarkSwitchIcon = ({ className = "" }) => (
  <svg
    width="1.625rem"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="dark_switch_icon"
    stroke={className}
    stroke-width="0.1"
    fill={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 4C4.58172 4 1 7.58172 1 12C1 16.4183 4.58172 20 9 20H15C19.4183 20 23 16.4183 23 12C23 7.58172 19.4183 4 15 4H9ZM15 16C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8C12.7909 8 11 9.79086 11 12C11 14.2091 12.7909 16 15 16Z"
      fill="{className}"
      stroke={className}
    />
  </svg>
);
export const LightSwitchIcon = ({ className = "" }) => (
  <svg
    width="1.625rem"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="light_switch_icon"
    stroke-width="0.1"
    fill={className}
  >
    <path
      fill-rule="nonzero"
      clip-rule="nonzero"
      d="M9 4C4.58172 4 1 7.58172 1 12C1 16.4183 4.58172 20 9 20H15C19.4183 20 23 16.4183 23 12C23 7.58172 19.4183 4 15 4H9ZM3 12C3 8.68629 5.68629 6 9 6H15C18.3137 6 21 8.68629 21 12C21 15.3137 18.3137 18 15 18H9C5.68629 18 3 15.3137 3 12ZM6 12C6 10.3431 7.34315 9 9 9C10.6569 9 12 10.3431 12 12C12 13.6569 10.6569 15 9 15C7.34315 15 6 13.6569 6 12ZM9 7C6.23858 7 4 9.23858 4 12C4 14.7614 6.23858 17 9 17C11.7614 17 14 14.7614 14 12C14 9.23858 11.7614 7 9 7Z"
    />
  </svg>
);
export const Light = ({ className = "" }) => (
  <svg
    width="1.625rem"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="light"
    stroke-width="0.1"
    fill="none"
  >
    <rect
      x="2"
      y="7"
      width="20"
      height="10"
      rx="5"
      stroke={className}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="7"
      cy="12"
      r="5"
      stroke={className}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const Dark = ({ className = "" }) => (
  <svg
    width="1.625rem"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="dark"
    stroke-width="0.1"
    fill="none"
  >
    <rect
      x="2"
      y="7"
      width="20"
      height="10"
      rx="5"
      stroke={className}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="17"
      cy="12"
      r="5"
      stroke={className}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
