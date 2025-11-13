import "./ResentTransaction.css";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSnackbar } from "notistack";
import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ResentTransaction({
  data,
  setExpenseData,
  balance,
  setBalance,
  setExpense,
  expense,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedItem, setSelectedItem] = useState(null);
  const [form, setForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // You can adjust this number

  const [currentItems, setCurrentItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [indexOfFirstItem, setIndexOfFirstItem] = useState(0);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    // setIndexOfLastItem(indexOfLastItem);
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setIndexOfFirstItem(indexOfFirstItem);
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(currentItems);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    setTotalPages(totalPages);
  }, [data, currentPage, itemsPerPage]);

  const EditForm = ({ input }) => {
    // console.log(input.price);
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const handleForm = (e) => {
      e.preventDefault();
      if (Number(balance) < Number(expenseAmount) - Number(input.price)) {
        setForm(false);
        enqueueSnackbar("Price should be less than the wallet balance", {
          variant: "warning",
        });
        return;
      }
      handleExpense();

      // setExpenseData((prev) => [
      //   ...prev,
      //   {
      //     title: title,
      //     price: Number(expenseAmount),
      //     category: category,
      //     date: date,
      //   },
      // ]);
    };
    const handleExpense = () => {
      setExpense(Number(expense) - Number(input.price) + Number(expenseAmount));
      setBalance(Number(balance) - Number(expenseAmount) + Number(input.price));
      setForm(false);
      input.price = expenseAmount;
      input.title = title;
      input.category = category;
      input.date = date;
    };
    return (
      <Modal
        className="expenseForm"
        isOpen={form}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setForm(false);
        }}
        // style={customStyles}
        // style={{ background: "opaque" }}
        contentLabel="Example Modal"
      >
        <div>
          <h2>Edit Expense</h2>
          <form className="expenseFormInput" onSubmit={handleForm}>
            <input
              required
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              required
              name="price"
              placeholder="Price"
              // value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
            />
            <select
              required
              name="category"
              placeholder="Select Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Travel">Travel</option>
            </select>
            <input
              required
              name="date"
              type="date"
              placeholder="dd/mm/yy"
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "rgba(244, 187, 74, 1)",
                width: "14rem",
                color: "white",
                fontWeight: "700",
                // backgroundImage:
                //   "linear-gradient(to right, rgba(217, 217, 217, 1),rgba(217, 217, 217, 1),rgba(244, 187, 74, 1))",
              }}
            >
              Add Expense
            </button>
            <button
              style={{
                backgroundColor: "rgba(217, 217, 217, 1)",
                width: "7rem",
                fontWeight: "400",
              }}
              onClick={() => setForm(false)}
            >
              Cancel
            </button>
          </form>
          <br />
        </div>
      </Modal>
    );
  };

  const handleRemove = (index) => {
    const recive = [...data];
    const sp = recive.splice(index, 1);
    setExpenseData(recive);
    setBalance(Number(balance) + sp[0].price);
  };
  //   const handleEdit = () =>{

  //   }
  const categoryIcon = (category) => {
    if (category === "Food") {
      return (
        <LocalPizzaOutlinedIcon color="action" sx={{ fontSize: "1.5rem" }} />
      );
    }
    if (category === "Entertainment") {
      return (
        <CardGiftcardOutlinedIcon color="action" sx={{ fontSize: "1.5rem" }} />
      );
    }
    if (category === "Travel") {
      return <LuggageOutlinedIcon color="action" sx={{ fontSize: "1.5rem" }} />;
    }
  };
  console.log(data);
  return (
    <div
      style={{ backgroundColor: "white", border: "none", borderRadius: "1rem" }}
    >
      {currentItems.map((item, index) => (
        <div key={indexOfFirstItem + index} className="card-holder">
          <div className="nameIcon">
            <div className="icon">
              {categoryIcon(item.category)}
              {/* <LocalPizzaOutlinedIcon
                color="action"
                sx={{ fontSize: "1.5rem" }}
              /> */}
            </div>
            <div>
              <p style={{ margin: "0", color: "rgba(0, 0, 0, 1)" }}>
                {item.title}
                {/* Samosa */}
              </p>
              <p style={{ margin: "0", color: "rgba(155, 155, 155, 1)" }}>
                {item.date}
                {/* March 24, 2022 */}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <div style={{ color: "rgba(244, 187, 74, 1)", fontWeight: "700" }}>
              ₹{item.price}
              {/* ₹150 */}
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: ".2rem" }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "red",
                  border: "none",
                  borderRadius: "30%",
                  padding: ".1rem",
                  alignItems: "center",
                }}
                onClick={() => handleRemove(index)}
              >
                <CancelOutlinedIcon />
              </div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "rgba(244, 187, 74, 1)",
                  border: "none",
                  borderRadius: "30%",
                  padding: ".1rem",
                  alignItems: "center",
                }}
                onClick={() => {
                  setSelectedItem(item);
                  setForm(true);
                }}
              >
                <EditOutlinedIcon />
              </div>
            </div>
          </div>

          {form ? <EditForm input={selectedItem} /> : null}
          {/* {form && selectedItem && <EditForm input={selectedItem} />} */}
        </div>
      ))}
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
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}
