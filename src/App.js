import React from "react";
import Accordian from "./components/Accordian";

const list = [
  {
    key: "1",
    title: "This is heading 1",
    content:
      "Heading 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati explicabo cupiditate laudantium quos repellat iste ducimus facere deleniti esse, adipisci animi veniam asperiores id reiciendis voluptatibus nisi? In, sed voluptatibus.",
  },
  {
    key: "2",
    title: "Heading 2",
    content:
      "Heading 2 This is content of 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus alias odit, rerum voluptas, labore mollitia expedita maxime inventore quisquam quis blanditiis. Eveniet!",
  },
  {
    key: "3",
    title: "Heading 3",
    content:
      "Heading 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi fugiat quasi eaque nulla ab? Obcaecati pariatur ducimus eos! Nemo molestiae pariatur architecto quam dignissimos magni ipsa! Quas harum odit rerum, voluptate esse saepe deserunt.",
  },
  {
    key: "4",
    title: "Heading 4",
    content:
      "Heading 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. A enim ad iusto fugit officiis illo laboriosam nihil illum laudantium! Debitis maiores cupiditate eos.",
  },
];

const App = () => {
  return (
    <div>
      <h1>Accordian</h1>
      <Accordian list={list} />
    </div>
  );
};

export default App;
