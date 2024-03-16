import React from "react";
import { Tabs } from "antd";
import Reward from "./Reward";
import TermCond from "./TermCond";
import Quiz from "./Quiz";
import Game from "./Game";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Reward",
    children: <Reward />,
  },
  
  {
    key: "2",
    label: "Play Quiz",
    children: <Quiz />,
  },
  {
    key: "3",
    label: "Play Game",
    children: <Game />,
  },
 
  {
    key: "4",
    label: "Term & Condition",
    children: <TermCond />,
  },
 
  
];

const PlayLayout = () => {
  return (
    <div>
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default PlayLayout;