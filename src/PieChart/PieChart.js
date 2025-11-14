import "./PieChart.css";
import {
  PieChart,
  Pie,
  // Sector,
  Cell,
  ResponsiveContainer,
  // Legend,
} from "recharts";

const COLORS = ["#A000FF", "#FF9304", "#FDE006"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={18}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartComponent({ data }) {
  // data = data.expenseData;
  // console.log(data);
  return (
    <>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            <ul></ul>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* <Legend iconType="rect" verticalAlign="bottom" /> */}
        </PieChart>
      </ResponsiveContainer>
      <div className="labels" style={{ display: "flex" }}>
        <span style={{ backgroundColor: "rgba(160, 0, 255, 1)" }}></span>
        <p>Food</p>
        <span style={{ backgroundColor: "rgba(255, 147, 4, 1)" }}></span>
        <p>Entertainment</p>
        <span style={{ backgroundColor: "rgba(253, 224, 6, 1)" }}></span>
        <p>Travel</p>
      </div>
    </>
  );
}

// import { Cell, Pie, PieChart } from "recharts";
// import "./PieChart.css";
// // Sample data
// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 400 },
// ];

// const RADIAN = Math.PI / 180;
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle = 0,
//   innerRadius,
//   outerRadius,
//   percent,
// }) => {
//   if (
//     typeof cx !== "number" ||
//     typeof cy !== "number" ||
//     typeof innerRadius !== "number" ||
//     typeof outerRadius !== "number"
//   ) {
//     return null;
//   }

//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const angle = -midAngle * RADIAN;
//   const x = cx + radius * Math.cos(angle);
//   const y = cy + radius * Math.sin(angle);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default function PieChartWithCustomizedLabel({
//   isAnimationActive = true,
//   expenseData,
// }) {
//   const incomingData = [];
//   expenseData.map((data) =>
//     incomingData.push({ title: data.title, price: data.price })
//   );
//   //   console.log(expenseData);
//   const remtoPx = (rem) => rem * 16;
//   return (
//     <div
//       style={{
//         width: "100%",
//         // maxWidth: "500px",
//         aspectRatio: "1",
//         height: "16.8rem",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         fontSize: "0.75rem",
//         fontWeight: "700",
//       }}
//     >
//       <PieChart
//         // width={200}
//         width={remtoPx(12.43)}
//         // height={200}
//         height={remtoPx(12.43)}
//       >
//         <Pie
//           data={data}
//           //   data={incomingData}
//           cx="50%"
//           cy="50%"
//           labelLine={false}
//           label={renderCustomizedLabel}
//           //   outerRadius={remtoPx(9.375)}
//           outerRadius={99}
//           fill="#8884d8"
//           dataKey="value"
//           isAnimationActive={isAnimationActive}
//         >
//           {data.map((entry, index) => (
//             <Cell
//               key={`cell-${entry.name}`}
//               fill={COLORS[index % COLORS.length]}
//             />
//           ))}
//         </Pie>
//       </PieChart>
//       <br />
//       <div className="labels" style={{ display: "flex" }}>
//         <span style={{ backgroundColor: "rgba(160, 0, 255, 1)" }}></span>
//         <p>Food</p>
//         <span style={{ backgroundColor: "rgba(255, 147, 4, 1)" }}></span>
//         <p>Entertainment</p>
//         <span style={{ backgroundColor: "rgba(253, 224, 6, 1)" }}></span>
//         <p>Travel</p>
//       </div>
//     </div>
//   );
// }
