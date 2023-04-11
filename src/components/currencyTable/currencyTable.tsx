import styles from "./currencyTable.module.scss";
import Pagination from "../pagination/pagination";
import usePagination from "../../hooks/usePagination";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal";
import { useState } from "react";
import PorfolioUpdateModalContent from "../porfolioUpdateModalContent/porfolioUpdateModalContent";
import { useCurrency } from "../../hooks/useCurrency";

const CurrencyTable: React.FC = () => {
  const { loading, response, error } = useCurrency();

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: response ? response.length : 0,
  });

  const navigate = useNavigate();

  const [activeCurrencyId, setActiveCurrencyId] = useState<string | null>(null);

  if (error) {
    return <div>Error: Oops... </div>;
  } else if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  } else {
    return (
      <>
        <Pagination
          page={page}
          totalPages={totalPages}
          prevPage={prevPage}
          setPage={setPage}
          nextPage={nextPage}
        />
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Symbol</th>
                <th>Name</th>
                <th>Avaliable supply</th>
                <th>Change in 24h</th>
                <th>Avarage price in 24h</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response
                  .slice(firstContentIndex, lastContentIndex)
                  .map((value) => (
                    <tr
                      key={value.id}
                      onClick={() => navigate(`/details/${value.id}`)}
                    >
                      <td>{value.rank}</td>
                      <td>{value.symbol}</td>
                      <td>{value.name}</td>
                      <td>{Number(value.supply).toFixed(2)}</td>
                      <td
                        style={
                          value.changePercent24Hr &&
                          value.changePercent24Hr[0] === "-"
                            ? { backgroundColor: "#ff00004d" }
                            : { backgroundColor: "#04760473" }
                        }
                      >
                        {value.changePercent24Hr}
                      </td>
                      <td>{value.priceUsd}</td>
                      <td
                        className={styles.plus}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCurrencyId(value.id);
                        }}
                      >
                        +
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          <Modal
            active={!!activeCurrencyId}
            setActive={() => setActiveCurrencyId(null)}
          >
            {activeCurrencyId && (
              <PorfolioUpdateModalContent
                name={activeCurrencyId}
                setActive={() => setActiveCurrencyId(null)}
              />
            )}
          </Modal>
        </div>
      </>
    );
  }
};

export { CurrencyTable };
