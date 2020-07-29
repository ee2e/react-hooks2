import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  // useEffect는 componentDidMount, componentWillUpdate와 같은 역할
  // useEffect(sayHello, ); -> 모든 변화 감시 conponent는 unmount
  useEffect(sayHello, [number]);
  return (
    <div>
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default UseEffect;
