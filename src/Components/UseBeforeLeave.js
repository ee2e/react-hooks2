import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  });
  return <div></div>;
};

const UseBeforeLeave = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default UseBeforeLeave;
