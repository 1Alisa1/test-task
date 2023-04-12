import styles from "./currencyTable.module.scss";
import Pagination from "../pagination/pagination";
import usePagination from "../../hooks/usePagination";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal";
import { useState } from "react";
import PorfolioUpdateModalContent from "../porfolioUpdateModalContent/porfolioUpdateModalContent";
import { useCurrency } from "../../hooks/useCurrency";
import CurrencyItem from "../../models/currencyItem";
import Loading from "../loading/loading";
import Error from "../error/error";

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

  const [activeCurrencyItem, setActiveCurrencyItem] =
    useState<CurrencyItem | null>(null);

  return (
    <>
      <div className={styles.container}>
        {error && <Error />}
        {!error && loading && <Loading />}
        {!error && !loading && response && (
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
                              setActiveCurrencyItem(value);
                            }}
                          >
                            +
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
              <Modal
                active={!!activeCurrencyItem}
                setActive={() => setActiveCurrencyItem(null)}
              >
                {activeCurrencyItem && (
                  <PorfolioUpdateModalContent
                    currencyItem={activeCurrencyItem}
                    setActive={() => setActiveCurrencyItem(null)}
                  />
                )}
              </Modal>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export { CurrencyTable };
