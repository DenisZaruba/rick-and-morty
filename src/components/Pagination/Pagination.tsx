import clsx from "clsx";
import styles from "./styles.module.scss";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (value: number) => void;
}) => {
  const renderPaginationItems = () => {
    const items = [];
    const maxPagesToShow = 8;

    if (totalPages <= maxPagesToShow) {
      // Show all page numbers if there are fewer than 8 pages
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={clsx(styles.btn, currentPage === i ? styles.btn_active : "")}
          >
            {i}
          </button>,
        );
      }
    } else {
      // Calculate the range of pages to display based on the current page
      const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
      const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

      // Show "Prev" button if not on the first page
      if (startPage > 1) {
        items.push(
          <button
            className={clsx(styles.btn, styles.btn_arrow)}
            key="prev"
            onClick={() => onPageChange(currentPage - 1)}
          >
            &#60;
          </button>,
        );
      }

      // Render the page numbers within the calculated range
      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={clsx(styles.btn, currentPage === i ? styles.btn_active : "")}
          >
            {i}
          </button>,
        );
      }

      // Show "Next" button if not on the last page
      if (endPage < totalPages) {
        items.push(
          <button
            className={clsx(styles.btn, styles.btn_arrow)}
            key="next"
            onClick={() => onPageChange(currentPage + 1)}
          >
            &#62;
          </button>,
        );
      }
    }

    return items;
  };

  return <div className={styles.pagination}>{renderPaginationItems()}</div>;
};

export default Pagination;
