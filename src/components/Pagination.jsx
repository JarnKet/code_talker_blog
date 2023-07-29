import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <>
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        containerClassName="pagination"
        previousLabel="ກັບຄືນ"
        previousClassName="prevoious-pagination"
        nextClassName="next-pagination"
        nextLabel="ຖັດໄປ"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active-pagination"
      />
    </>
  );
};

export default Pagination;
