import { createContext, FC, ReactNode, useState } from "react";
import { getCookie } from "../components/CookieHandler/CookieHandler";

interface TokenContextType {
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

// Initialize with undefined to properly reflect the absence of a token
const TokenContext = createContext<TokenContextType>({
  token: undefined,
  setToken: () => {},
});

const tokenCookie = getCookie("user-token");

// TokenContextProvider component
export const TokenContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize state with the token from cookies if available
  const [token, setToken] = useState<string | undefined>(tokenCookie);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
