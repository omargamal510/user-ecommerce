import { createContext, FC, ReactNode, useState } from "react";
import { getCookie } from "../components/CookieHandler/CookieHandler";

interface TokenContextType {
  token: string | undefined;
  userName: string | undefined | null;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  setUserName: React.Dispatch<React.SetStateAction<string | undefined | null>>;
}

// Initialize with undefined to properly reflect the absence of a token
const TokenContext = createContext<TokenContextType>({
  token: undefined,
  userName: null,
  setToken: () => {},
  setUserName: () => {},
});

const tokenCookie = getCookie("user-token");

// TokenContextProvider component
export const TokenContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize state with the token from cookies if available
  const [token, setToken] = useState<string | undefined>(tokenCookie);
  const [userName, setUserName] = useState<string | undefined | null>(
    localStorage.getItem("userName")
  );

  return (
    <TokenContext.Provider value={{ token, setToken, userName, setUserName }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
