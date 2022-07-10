import { useRef, useState } from 'react';

const TypeText = () => {
  const TypeInput = useRef();
  const [state, setState] = useState();

  const handleChangeState = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="TypeText">
      <input
        ref={TypeInput}
        id="TypeText"
        type="text"
        value={state}
        onChange={handleChangeState}
        placeholder="Please type here"
      ></input>
    </div>
  );
};

export default TypeText;
