import { createContext, useState, useContext } from "react";
import { PortfolioActive } from "../models/portfolioActive";


interface PortfolioContextValue {
  portfolio: Map<string, PortfolioActive>;
  setPortfolio: React.Dispatch<React.SetStateAction<Map<string, PortfolioActive>>>;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

interface PortfolioProviderProps {
  children: React.ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({
  children,
}) => {
  const [portfolio, setPortfolio] = useState<Map<string, PortfolioActive>>(new Map());

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
}

