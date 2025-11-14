import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Pagination({
  setCurrentPage,
  currentPage,
  totalPages,
}) {
  return (
    <div className="pagination-controls">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <ArrowBackIcon />
      </button>
      <span
        style={{
          margin: "0 .2rem",
          backgroundColor: "rgba(67, 150, 123, 1)",
          padding: "0 .8rem",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {currentPage}
      </span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <ArrowForwardIcon />
      </button>
    </div>
  );
}
