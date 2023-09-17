import { FC, useState } from "react";
import "./InfoBlock.scss";
import cn from "classnames";

const infoMock = [
  {
    header: "Replacement",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, rerum.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam facilis suscipit cupiditate unde cumque odio consequuntur at tempore  exercitationem assumenda?",
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
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, rerum.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam facilis suscipit cupiditate unde cumque odio consequuntur at tempore  exercitationem assumenda?",
  },
  {
    header: "Discount",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, rerum.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam facilis suscipit cupiditate unde cumque odio consequuntur at tempore  exercitationem assumenda?",
  },
  {
    header: "Important",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, rerum.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam facilis suscipit cupiditate unde cumque odio consequuntur at tempore  exercitationem assumenda?",
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
