import { useState } from "react";
import "./Main.css";
import WalletBalance from "../Wallet-Balance/WalletBalance";
import ExpenseCard from "../Expense/Expense";
// import PieChartWithCustomizedLabel from "../PieChart/PieChart";
import PieChartComponent from "../PieChart/PieChart";
export default function Main({
  expense,
  setExpense,
  balance,
  setBalance,
  expenseData,
  setExpenseData,
  categorySpends,
  categoryCount,
}) {
  console.log(expenseData);
  console.log(categoryCount);
  return (
    <div className="main-content">
      <div
        className="cards"
        // style={{ width: "47.5rem", display: "flex", gap: "3rem" }}
      >
        <WalletBalance balance={balance} setBalance={setBalance} />
        <ExpenseCard
          balance={balance}
          setBalance={setBalance}
          expense={expense}
          setExpense={setExpense}
          expenseData={expenseData}
          setExpenseData={setExpenseData}
        />
      </div>
      <div
        style={{ width: 400, height: 250 }}
        // style={{ height: "16.8rem" }}
      >
        {/* <WalletBalance /> */}
        {/* <PieChartWithCustomizedLabel expenseData={expenseData} /> */}
        <PieChartComponent
          data={[
            { name: "Food", value: categoryCount.food },
            { name: "Entertainment", value: categoryCount.entertainment },
            { name: "Travel", value: categoryCount.travel },
          ]}
        />
      </div>
    </div>
  );
}
