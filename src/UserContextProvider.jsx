import React, { useState } from "react";
import { UserContext } from "./Context";

const UserContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <UserContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
