import { useState, createContext, useContext } from "react";

const ScrollContext = createContext({
  scrollRef: {},
  setScrollRef: () => {},
});

export function ScrollPointer(props) {
  const [scrollRef, setScrollRef] = useState({});

  return (
    <ScrollContext.Provider value={{scrollRef, setScrollRef}}>
      {props.children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  return useContext(ScrollContext);
}
