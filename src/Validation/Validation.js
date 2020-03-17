import React from "react";

const ValidationComponent = props => {
  const { length } = props;

  //   const text = (() => {
  //     if (length >= 5) {
  //       return "Text long enough";
  //     }

  //     return "Text too short";
  //   })();
  // In case more than 2 options its better this way ^^

  //   let text = "Text too short";
  //   if (length >= 5) text = "Text long enough";
  // not the best way of doing it ^^

  return (
    <div>
      <p>{length >= 5 ? "Text long enough" : "Text too short"}</p>

      <p>{text}</p>
    </div>
  );
};

export default ValidationComponent;
