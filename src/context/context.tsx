import { createContext, useState, useContext, useEffect } from "react";
import { PortfolioActive } from "../models/portfolioActive";

interface PortfolioContextValue {
  portfolio: Map<string, PortfolioActive>;
  setPortfolio: React.Dispatch<
    React.SetStateAction<Map<string, PortfolioActive>>
  >;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

interface PortfolioProviderProps {
  children: React.ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({
  children,
}) => {
  let initialValue: Map<string, PortfolioActive> = new Map();
  const localStorageKey = process.env.REACT_APP_LOCAL_STORAGE_KEY;

  if (!localStorageKey) {
    throw Error(`REACT_APP_LOCAL_STORAGE_KEY is undefined`);
  }

  const storage = localStorage.getItem(localStorageKey);

  if (storage) {
    initialValue = new Map(JSON.parse(storage));
  }

  const [portfolio, setPortfolio] = useState<Map<string, PortfolioActive>>(
    initialValue
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(Array.from(portfolio.entries())));
  }, [portfolio]);

  return (
    <PortfolioContext.Provider value={{ portfolio, setPortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw Error("Expected context value to be set");
  }

  return context;
};
