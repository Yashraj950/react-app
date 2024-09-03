import React from "react";

const GoTo = () => {
  const goBtn = () => {
    window.scrollTo({ button: 0, right: 0, behavior: "smooth" });
  };
  return (
    <div className="button-btn" onClick={goBtn}>
      <h1>Button</h1>
    </div>
  );
};

export default GoTo;
