import styles from "./pagination.module.scss";

interface PaginationProps {
  page: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({page, totalPages, nextPage, prevPage, setPage}) => {
  return (
    <div className={styles.pagination}>
        <p className={styles.text}>
          {page}/{totalPages}
        </p>
        <div className={styles.pages}>
          <button onClick={prevPage} className={styles.page}>
            &larr;
          </button>
          {/* @ts-ignore */}
          {[...Array(totalPages).keys()].map((el) => (
            <button
              onClick={() => setPage(el + 1)}
              key={el}
                className={`${styles.page} ${page === el + 1 ? styles.active : ""}`}
            >
              {el + 1}
            </button>
          ))}
          <button onClick={nextPage} className={styles.page}>
            &rarr;
          </button>
        </div>
      </div>
  );
}

export default Pagination;