import { createContext, useContext } from "react";

const NavContext = createContext();

export function NavPointer(props) {
  let sharedNavState = { currentLocation };

  return (
    <NavContext.Provider value={sharedNavState}>
      {props.children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  return useContext(NavContext);
}
