import { useState, useEffect } from "react";

import Main from "../Main/Main";
import ResentTransaction from "../Resent-Transaction/ResentTransaction";
import "./Parent.css";
// import TinyBarChart from "../Horizontal-Bar/HorizontalBar";
import HorizontalBars from "../Horizontal-Bar/HorizontalBar";

export default function Parent() {
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(5000);
  const [expenseData, setExpenseData] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  const [categorySpends, setCategorySpends] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });
  const [categoryCount, setCategoryCount] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  // Balance in local storage
  useEffect(() => {
    //Check localStorage
    const localBalance = localStorage.getItem("balance");

    if (localBalance) {
      setBalance(Number(localBalance));
    } else {
      setBalance(5000);
      localStorage.setItem("balance", 5000);
    }

    const items = JSON.parse(localStorage.getItem("expenses"));

    setExpenseData(items || []);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (expenseData.length > 0 || isMounted) {
      localStorage.setItem("expenses", JSON.stringify(expenseData));
    }

    if (expenseData.length > 0) {
      setExpense(
        expenseData.reduce(
          (accumulator, currentValue) =>
            accumulator + Number(currentValue.price),
          0
        )
      );
    } else {
      setExpense(0);
    }

    let foodSpends = 0,
      entertainmentSpends = 0,
      travelSpends = 0;
    let foodCount = 0,
      entertainmentCount = 0,
      travelCount = 0;
    console.log(expenseData);
    expenseData.forEach((item) => {
      if (item.category === "Food") {
        foodSpends += Number(item.price);
        foodCount++;
      } else if (item.category === "Entertainment") {
        entertainmentSpends += Number(item.price);
        entertainmentCount++;
      } else if (item.category === "Travel") {
        travelSpends += Number(item.price);
        travelCount++;
      }
    });

    setCategorySpends({
      food: foodSpends,
      travel: travelSpends,
      entertainment: entertainmentSpends,
    });

    setCategoryCount({
      food: foodCount,
      travel: travelCount,
      entertainment: entertainmentCount,
    });
  }, [expenseData, isMounted]);

  // saving balance in localStorage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("balance", balance);
    }
  }, [balance, isMounted]);

  return (
    <div className="parent-element">
      <h1>Expense Tracker</h1>
      <div className="main-section">
        <Main
          expense={expense}
          setExpense={setExpense}
          balance={balance}
          setBalance={setBalance}
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          categorySpends={categorySpends}
          categoryCount={categoryCount}
        />
      </div>
      <div className="tracking-heading">
        <div style={{ width: "55%" }}>
          <h2>Recent Transaction</h2>
          <ResentTransaction
            data={expenseData}
            setExpenseData={setExpenseData}
            balance={balance}
            setBalance={setBalance}
            expense={expense}
            setExpense={setExpense}
          />
        </div>
        <div style={{ width: "40%" }}>
          <h2>Top Expenses</h2>
          <HorizontalBars
            // style={{ width: "45%" }}
            expense={expenseData}
            data={[
              { name: "Food", value: categorySpends.food },
              { name: "Entertainment", value: categorySpends.entertainment },
              { name: "Travel", value: categorySpends.travel },
            ]}
          />
        </div>
      </div>
      {/* <div className="tracking"></div> */}
    </div>
  );
}
