import React, { useReducer } from "react";

const initialState = {
  message: "hi",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`,
      };
    case "whisper":
      return {
        message: `excuse me ${state.message}`,
      };
  }
};

const Checked = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </div>
  );
};

export default Checked;
