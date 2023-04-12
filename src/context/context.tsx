import { createContext, useState, useContext, useEffect } from "react";
import { PortfolioActive } from "../models/portfolioActive";

const LOCAL_STORAGE_KEY = "portfolio";

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

  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (storage) {
    initialValue = new Map(JSON.parse(storage));
  }

  const [portfolio, setPortfolio] = useState<Map<string, PortfolioActive>>(
    initialValue
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Array.from(portfolio.entries())));
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
