import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const UseInput = () => {
  const maxLen = (value) => value.length <= 10;
  // const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  return (
    <div>
      {/* ...name : name 안에 있는 모든 것들을 보여줌 (여기서는 value={name.value} onChange={name.onChange}와 같다) */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default UseInput;
