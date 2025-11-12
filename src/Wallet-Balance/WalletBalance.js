import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./WalletBalance.css";
const WalletBalance = ({ balance, setBalance }) => {
  const [form, setForm] = useState(false);
  //   useEffect(() => {
  //     localStorage.setItem("balance", balance);
  //   });
  const AddBalanceForm = () => {
    const [addBal, setAddBal] = useState(0);
    const handleAddBalance = () => {
      setBalance(Number(balance) + Number(addBal));
      setForm(false);
      let ballanceWallet = localStorage.getItem("balance");
      let newBalance = Number(ballanceWallet) + Number(addBal);
      console.log(newBalance);
      localStorage.setItem("balance", newBalance);
    };
    return (
      <Modal
        className="addBalForm"
        isOpen={form}
        // onAfterOpen={afterOpenModal}
        onRequestClose={form}
        // style={customStyles}
        // style={{ background: "opaque" }}
        contentLabel="Example"
      >
        <div>
          <h2>Add Balance</h2>
          <form className="form-main" onSubmit={handleAddBalance}>
            <input
              required
              type="number"
              placeholder="Income Amount"
              // value={addBal}
              onChange={(e) => setAddBal(e.target.value)}
            />
            <button
              type="submit"
              style={{
                width: "9rem",
                color: "white",
                backgroundColor: "rgba(244, 187, 74, 1)",
              }}
              // onClick={() => handleAddBalance()}
            >
              Add Balance
            </button>
            <button style={{ width: "7rem" }} onClick={() => setForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      </Modal>
    );
  };
  return (
    <div className="walletBalanceCard">
      <div>
        Wallet Balance:{" "}
        <span style={{ color: "rgba(157, 255, 91, 1)", fontWeight: "700" }}>
          {" "}
          ₹{balance}
        </span>
      </div>
      <br />

      <button
        type="button"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(181, 220, 82, 1),rgba(137, 225, 72, 1))",
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
        + Add Income
      </button>

      {form ? <AddBalanceForm /> : null}
    </div>
  );
};

export default WalletBalance;
