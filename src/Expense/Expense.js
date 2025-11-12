import { useState } from "react";
import { useSnackbar } from "notistack";
import "./Expense.css";
import Modal from "react-modal";
const ExpenseCard = ({
  balance,
  setBalance,
  expense,
  setExpense,
  expenseData,
  setExpenseData,
}) => {
  // const [balance, setBalance] = useState(5000);
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState(false);

  const ExpenseForm = () => {
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const handleForm = (e) => {
      e.preventDefault();
      if (Number(balance) < Number(expenseAmount)) {
        setForm(false);
        enqueueSnackbar("Price should be less than the wallet balance", {
          variant: "warning",
        });
        return;
      }
      handleExpense();
      setExpenseData((prev) => [
        ...prev,
        {
          title: title,
          price: Number(expenseAmount),
          category: category,
          date: date,
        },
      ]);
    };
    const handleExpense = () => {
      setExpense(Number(expense) + Number(expenseAmount));
      setBalance(Number(balance) - Number(expenseAmount));
      setForm(false);
    };
    return (
      <Modal
        className="expenseForm"
        isOpen={form}
        // onAfterOpen={afterOpenModal}
        onRequestClose={form}
        // style={customStyles}
        // style={{ background: "opaque" }}
        contentLabel="Example Modal"
      >
        <div>
          <h2>Add Expense</h2>
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
              // onClick={() => handleForm()}
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
  return (
    <div className="expenseCard">
      <div>
        Expenses:{" "}
        <span style={{ color: "rgba(244, 187, 74, 1)", fontWeight: "700" }}>
          {" "}
          ₹{expense}
        </span>
      </div>
      <br />

      <button
        type="button"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255, 149, 149, 1),rgba(255, 71, 71, 1),rgba(255, 56, 56, 1))",
          width: "10.5rem",
          height: "2.375rem",
          color: "white",
          border: "none",
          borderRadius: "1rem",
          fontWeight: "700",
          fontSize: "1rem",
        }}
        onClick={() => setForm(true)}
      >
        + Add Expense
      </button>
      {form ? <ExpenseForm /> : null}
    </div>
  );
};

export default ExpenseCard;
