import Modal from "react-modal";
import { useSnackbar } from "notistack";
import { useState } from "react";

const EditForm = ({
  balance,
  expense,
  form,
  input,
  setForm,
  setBalance,
  setExpense,
}) => {
  const { enqueueSnackbar } = useSnackbar();
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

export default EditForm;
