import React, { useState } from "react";
import "./accordian.css";

const Accordian = ({ list }) => {
  const [opened, setOpened] = useState(null);

  const onExpand = (key) => {
    if (key === opened) {
      setOpened(null); // close if user clicks again on opened panel
    } else {
      setOpened(key);
    }
  };

  return (
    <div className="accordian-container">
      {list.map((item) => {
        return (
          <div key={item.key} className="accordian-card">
            <h2 className="heading" onClick={() => onExpand(item.key)}>
              <img
                src={
                  opened === item.key
                    ? "assests/opened.png"
                    : "assests/greater.png"
                }
                alt="icon"
                width={15}
              />{" "}
              {item.title}
            </h2>
            {opened === item.key ? (
              <div className="content">{item.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
