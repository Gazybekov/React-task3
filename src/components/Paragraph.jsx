import React, { useState } from "react";

const Paragraph = (props) => {
  let textInput = React.createRef();
  let textOut = React.createRef();
  const paragraph = () => {
    textOut.current.innerText += textInput.current.value;
  };
  return (
    <div>
      <input ref={textInput} />
      <button onClick={paragraph}>Click</button>
      <p ref={textOut}></p>
    </div>
  );
};

export default Paragraph;
