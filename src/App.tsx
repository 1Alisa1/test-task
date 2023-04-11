import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage/homePage";
import { DetailsPage } from "./pages/detailsPage/detailsPage";
import { Layout } from "./components/layout/layout";
import { PortfolioProvider } from "./context/context";

function App() {
  return (
    <>
      <PortfolioProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/details/:currencyId" element={<DetailsPage />} />
          </Route>
        </Routes>
      </PortfolioProvider>
    </>
  );
}

export default App;
