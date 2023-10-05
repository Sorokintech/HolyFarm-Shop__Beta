import { FC, useState } from "react";
import "./InfoBlock.scss";
import cn from "classnames";

const infoMock = [
  {
    header: "Replacement",
    label:
      "Checking accounts are given 12 hours. Non-valid returns are made in cases of: ",
    description:
      "▪ checkpointing of the account before the moment of purchase (checkpointing when logging in no replacements)       ▪ polisi or advertising ban before the moment of purchase       ▪ not matching the description      If your case is not suitable write to support      ",
  },
  {
    header: "How to buy?",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, rerum.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam facilis suscipit cupiditate unde cumque odio consequuntur at tempore  exercitationem assumenda?",
  },
  {
    header: "Verify Account",
    label: "How to avoid advertising restrictions?",
    description:
      "Get an easy way to bypass advertising restrictions using our Telegram bot. Our neural network generates special cards that allow you to successfully pass the process of checking and restoring your advertising activity.",
  },
  {
    header: "Discount",
    label: "Discounts for bulk purchases are given automatically ",
    description:
      "purchase from 10 accounts - 5%       purchase from 50 accounts - 10%       purchase from 100 accounts - 15%       purchase from 200 accounts - 30%      ",
  },
  {
    header: "Important",
    label: "Important section",
    description:
      "We have been producing Facebook accounts for marketing, traffic arbitrage and dropshipping since 2018. We have written a bot that farming accounts using artificial intelligence, making each account unique",
  },
];

const InfoBlock: FC = () => {
  const [currentBlock, setCurrentBlock] = useState<string>("Important");
  return (
    <div className={cn("info-block")}>
      <div className={cn("info-block-handlers")}>
        {infoMock.map((item) => (
          <button
            id={item.header}
            className={cn(
              "info-block-handlers__btn",
              currentBlock == item.header && "info-block-handlers__btn__active"
            )}
            onFocus={() => setCurrentBlock(item.header)}
            autoFocus
          >
            {item.header}
          </button>
        ))}
      </div>
      <div className={cn("info-block-content")}>
        {infoMock
          .filter((item) => item.header == currentBlock)
          .map((item) => (
            <div className={cn("info-block-content__item")} id={item.header}>
              <p>{item.header}</p>
              <p>{item.label}</p>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default InfoBlock;
