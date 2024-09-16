import { FC, ReactNode, useState, createContext } from "react";
interface CountContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const DummyContext = createContext<CountContextType>({
  count: 0,
  setCount: () => {},
});

type ChildProps = {
  children: ReactNode;
};

export const DummyContextProvider: FC<ChildProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <DummyContext.Provider value={{ count, setCount }}>
      {children}
    </DummyContext.Provider>
  );
};

export default DummyContext;
