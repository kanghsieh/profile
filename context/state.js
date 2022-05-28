import { useState, createContext, useContext } from "react";

const NavContext = createContext({
  navRef: {},
  setNavRef: (ref) => {},
});

export function NavPointer(props) {
  const [navRef, setNavRef] = useState({});

  return (
    <NavContext.Provider value={{navRef, setNavRef}}>
      {props.children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  return useContext(NavContext);
}
