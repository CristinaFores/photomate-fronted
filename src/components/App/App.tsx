import React from "react";

import { useAppSelector } from "../../redux/hooks";
import Modal from "../Modal/Modal";

const App = () => {
  const {
    modal: { showModal, text, isError },
  } = useAppSelector(({ ui }) => ui);

  return (
    <div className="app">
      {showModal && <Modal text={text} isError={isError} />}
    </div>
  );
};

export default App;
