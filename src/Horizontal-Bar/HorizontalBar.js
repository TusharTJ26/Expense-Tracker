// import { useState, useEffect } from "react";
import "./Bar.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  // Tooltip,
  ResponsiveContainer,
  // Cell,
} from "recharts";

const TinyBarChart = ({ expense, data }) => {
  console.log(data);
  // const [food, setFood] = useState(0);
  // const [entertainment, setEntertainment] = useState(0);
  // const [travel, setTravel] = useState(0);

  // const data = [
  //   { category: "Food", price: food },
  //   { category: "Entertainment", price: entertainment },
  //   { category: "Travel", price: travel },
  // ];
  // useEffect(() => {
  //   if (!expense || expense.length === 0) return;

  //   const Food = expense.reduce((sum, item) => {
  //     return item.category === "Food" ? sum + item.price : sum;
  //   }, 0);

  //   const Entertainment = expense.reduce((sum, item) => {
  //     return item.category === "Entertainment" ? sum + item.price : sum;
  //   }, 0);

  //   const Travel = expense.reduce((sum, item) => {
  //     return item.category === "Travel" ? sum + item.price : sum;
  //   }, 0);

  //   setFood(Food);
  //   setEntertainment(Entertainment);
  //   setTravel(Travel);
  // }, [expense]);
  // console.log(data);
  return (
    <div className="  expenseChart">
      <div className="barWrapper">
        <ResponsiveContainer width="100%" height={330}>
          <BarChart data={data} layout="vertical">
            <XAxis
              type="number"
              axisLine={false}
              hide={true}
              // display="none"
            />
            <YAxis
              type="category"
              width={110}
              dataKey="name"
              axisLine={false}
              tick={{ fontSize: "1rem" }}
            />
            <Bar dataKey="value" fill="#8884d8" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TinyBarChart;
