import { useState, useEffect } from "react";
import "./Bar.css";
// import { BarChart } from "@mui/x-charts/BarChart";

// export default function HorizontalBars({ expense, categorySpends }) {
//   console.log(expense);

//   const [food, setFood] = useState(0);
//   const [entertainment, setEntertainment] = useState(0);
//   const [travel, setTravel] = useState(0);

//   const data = [
//     { category: "Food", price: food },
//     { category: "Entertainment", price: entertainment },
//     { category: "Travel", price: travel },
//   ];

//   useEffect(() => {
//     if (!expense || expense.length === 0) return;

//     const Food = expense.reduce((sum, item) => {
//       return item.category === "Food" ? sum + item.price : sum;
//     }, 0);

//     const Entertainment = expense.reduce((sum, item) => {
//       return item.category === "Entertainment" ? sum + item.price : sum;
//     }, 0);

//     const Travel = expense.reduce((sum, item) => {
//       return item.category === "Travel" ? sum + item.price : sum;
//     }, 0);

//     setFood(Food);
//     setEntertainment(Entertainment);
//     setTravel(Travel);
//   }, [expense]);

//   console.log(data);
//   return (
//     <div
//       style={{ width: "100%", height: "21.56rem", backgroundColor: "white" }}
//     >
//       <BarChart
//         dataset={data}
//         yAxis={[{ scaleType: "band", dataKey: "category" }]}
//         series={[
//           {
//             dataKey: "price",
//             // label: "Expense (₹)"
//           },
//         ]}
//         layout="horizontal"
//       />
//     </div>
//   );
// }
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
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
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} layout="vertical">
            <XAxis
              type="number"
              axisLine={false}
              hide={true}
              // display="none"
            />
            <YAxis
              type="category"
              width={100}
              dataKey="name"
              axisLine={false}
            />
            <Bar dataKey="value" fill="#8884d8" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
  // return (
  //   <div style={{ width: "100%", height: 300 }}>
  //     <ResponsiveContainer>
  //       <BarChart
  //         data={data}
  //         layout="vertical"
  //         margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
  //       >
  //         <YAxis type="category" dataKey="category" />
  //         <Tooltip />
  //         <Bar dataKey="price" barSize={30}>
  //           {data.map((entry, index) => (
  //             <Cell
  //               key={`cell-${index}`}
  //               // fill={colors[index % colors.length]}
  //             />
  //           ))}
  //         </Bar>
  //       </BarChart>
  //     </ResponsiveContainer>
  //   </div>
  // <BarChart
  //   style={{
  //     width: "100%",
  //     maxWidth: "300px",
  //     maxHeight: "100px",
  //     aspectRatio: 1.618,
  //   }}
  //   responsive
  //   data={data}
  //   layout="vertical"
  // >
  //   <YAxis dataKey="category" />
  //   <Bar dataKey="price" fill="#8884d8" />
  // </BarChart>
  // )
};

export default TinyBarChart;
