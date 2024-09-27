import PropTypes from "prop-types";

const Pagination = ({
  totalPosts,
  postsPerPage,
  selectedPage,
  setSelectedPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setSelectedPage(page);
    }
  };

  return (
    <div className="product__pagination">
      {selectedPage > 1 && (
        <button onClick={() => handlePageClick(1)} className="pagination-prev">
          <i className="fa fa-angle-double-left" />
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={page === selectedPage ? "current-page" : ""}
        >
          {page}
        </button>
      ))}
      {selectedPage < totalPages && (
        <button
          onClick={() => handlePageClick(totalPages)}
          className="pagination-next"
        >
          <i className="fa fa-angle-double-right" />
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  selectedPage: PropTypes.number.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
};

export default Pagination;
