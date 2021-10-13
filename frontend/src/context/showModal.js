import { createContext, useContext, useState } from "react";

export const ShowModalContext = createContext();

export const ShowModalProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ShowModalContext.Provider value={{ showModal, setShowModal }}>
      {props.children}
    </ShowModalContext.Provider>
  );
};

export const useShowModal = () => useContext(ShowModalContext);

