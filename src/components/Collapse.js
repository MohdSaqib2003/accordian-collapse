import React, { useState } from "react";
import "./collapse.css";

const Collapse = ({ list }) => {
  const [opened, setOpened] = useState([]);

  const onExpand = (key) => {
    if (opened.includes(key)) {
      setOpened(opened.filter((k) => k !== key)); // remove from array, if user clicks on expanded panel
    } else {
      setOpened([...opened, key]);
    }
  };

  return (
    <div className="collapse-container">
      {list.map((item) => {
        return (
          <div key={item.key} className="collapse-card">
            <h2 className="heading" onClick={() => onExpand(item.key)}>
              <img
                src={
                  opened.includes(item.key)
                    ? "assests/opened.png"
                    : "assests/greater.png"
                }
                alt="icon"
                width={15}
              />{" "}
              {item.title}
            </h2>
            {opened.includes(item.key) ? (
              <div className="content">{item.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Collapse;
