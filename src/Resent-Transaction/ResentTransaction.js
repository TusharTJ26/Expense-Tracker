import "./ResentTransaction.css";
import { useEffect, useState } from "react";
import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";

import EditForm from "./EditForm";
import Pagination from "./Pagination";

export default function ResentTransaction({
  data,
  setExpenseData,
  balance,
  setBalance,
  setExpense,
  expense,
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [form, setForm] = useState(false);

  // For pagination and loading specific number of items per page
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
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1); // fallback to page 1 if totalPages is 0
    }
  }, [data, currentPage, itemsPerPage]);

  // TO remove the item from list
  const handleRemove = (index) => {
    const recive = [...data];
    const sp = recive.splice(index, 1);
    console.log(sp);
    setExpenseData(recive);
    setBalance(Number(balance) + Number(sp[0].price));
  };

  //For item icon
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

  if (currentItems.length < 1) {
    return (
      <div className="emptyTransactionsWrapper">
        <p>No transactions!</p>
      </div>
    );
  }
  return (
    <div
      className="Transactions"
      name="Transactions"
      style={{ backgroundColor: "white", border: "none", borderRadius: "1rem" }}
    >
      {currentItems.map((item, index) => (
        <div
          key={indexOfFirstItem + index}
          className="card-holder Transactions"
          name="Transactions"
        >
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

          {form ? (
            <EditForm
              balance={balance}
              expense={expense}
              form={form}
              input={selectedItem}
              setBalance={setBalance}
              setForm={setForm}
              setExpense={setExpense}
            />
          ) : null}
          {/* {form && selectedItem && <EditForm input={selectedItem} />} */}
        </div>
      ))}
      {currentItems.length > 2 || currentPage !== 1 ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      ) : (
        ""
      )}
    </div>
  );
}
