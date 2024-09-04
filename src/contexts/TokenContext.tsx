import { createContext, FC, ReactNode, useState } from "react";

interface TokenContextType {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value of undefined
const TokenContext = createContext<TokenContextType>({
  token: "",
  setToken: () => {},
});

type TokenChildrenProp = {
  children: ReactNode;
};

export const TokenContextProvider: FC<TokenChildrenProp> = ({ children }) => {
  const [token, setToken] = useState<string>("");

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
