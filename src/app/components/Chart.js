"use client"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart,Area} from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';
// import Image from 'next/image';

// // #region Sample data
// const data = [
//   {
//     name: 'Iraq',
//     totalManpower: 9504,
//     uv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Qatar',
//     totalManpower: 12357,
//     uv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Singapore',
//     totalManpower: 3562,
//     uv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'UAE & Dubai',
//     totalManpower: 13315,
//     uv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Malaysia',
//     totalManpower: 18967,
//     uv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Saudi Arabia',
//     totalManpower: 69453,
//     uv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Rest Of',
//     totalManpower: 64453,
//     uv: 3800,
//     amt: 2500,
//   },

// ];
// // #endregion

// export default function Chart() {
//   return (
//       <section className="max-w-6xl mx-auto px-6 mt-6 text-center mb-2  ">
       
//    <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8 mb-5">
//     <h3 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center">
//    Country-wise Total Manpower Mobilized Through COCL(2000-2024)
//     </h3>
//   </div>
   
//     <div className='flex justify-center'>
//  <AreaChart
//       style={{ width: '100%', maxWidth: '900px', maxHeight: '70vh', aspectRatio: 1.618 }}
//       responsive
//       data={data}
//       margin={{
//         top: 20,
//         right: 0,
//         left: 0,
//         bottom: 0,
//       }}
//       onContextMenu={(_, e) => e.preventDefault()}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" niceTicks="snap125" />
//       <YAxis width="auto" niceTicks="snap125" />
//       <Tooltip />
//       <Area type="monotone" dataKey="totalManpower" stroke="#171a6d" fill="#040424" />
//       <RechartsDevtools />
//     </AreaChart>
//     </div>

//     </section>
//   );
// }



import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";



const blues = [
 ["#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
  ["#1A334A", "#264F73", "#457AA6"]
  ["#264F73", "#457AA6"],
  ["#264F73", "#457AA6"],
  ["#1A334A", "#264F73", "#457AA6", "#678097", "#E3EBF2"]
];



const colors = 
 [
 ["#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
  ["#1A334A", "#264F73", "#457AA6"]
  ["#264F73", "#457AA6"],
  ["#264F73", "#457AA6"],
  ["#1A334A", "#264F73", "#457AA6", "#678097", "#E3EBF2"]
];

// [

//  "#64b76b", 
//   "#cf9ea2", 
//   "#b1a1e0",  
   

//    "#f08c70",
//       "#8e9b4c",
//   "#a7cfd4",
//    "#71c4f8", 
// ];


// [
//  ["#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
//   ["#1A334A", "#264F73", "#457AA6"]
//   ["#264F73", "#457AA6"],
//   ["#264F73", "#457AA6"],
//   ["#1A334A", "#264F73", "#457AA6", "#678097", "#E3EBF2"]
// ]




// const getColor = (length, index) => {
//   return colors[index % colors.length];
// };
const getColor = (length, index) => {
  if (length <= colors.length) {
    return colors[length - 1][index];
  }

  return colors[colors.length - 1][index % colors.length];
};
const data = [
 { name: "Iraq", pv: 9504 },
  { name: "UAE & Dubai", pv: 13315 },
  { name: "Singapore", pv: 9800 },
    { name: "Saudi Arabia", pv: 69453 },
    { name: "Malaysia", pv: 18967 },
      { name: "Qatar", pv: 12357 },
{ name: "Rest Of", pv: 6453 }
];
const data2=[
 { name: "Iraq", pv: 9504 },
   { name: "Saudi Arabia", pv: 69453 },
  { name: "UAE & Dubai", pv: 13315 },
  { name: "Singapore", pv: 9800 },

    { name: "Malaysia", pv: 18967 },
      { name: "Qatar", pv: 12357 },
        
{ name: "Rest Of", pv: 6453 }
];


let ctx;

export const measureText14HelveticaNeue = text => {
  if (!ctx) {
    ctx = document.createElement("canvas").getContext("2d");
    ctx.font = "14px 'Helvetica Neue";
  }

  return ctx.measureText(text).width;
};

const BAR_AXIS_SPACE = 10;

export default function Chart() {
    const [radius, setRadius] = useState(200); // default desktop radius
    const [chartData, setChartData] = useState(); // default desktop radius
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(100); // small screens
      
      } else {
        setRadius(200); // desktop
      }
  setChartData(window.innerWidth)
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full sm:max-w-6xl mx-auto sm:px-6 mt-6 text-center mb-2">
      
      <h3 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center mt-20">
   Country-wise Total Manpower Mobilized Through COCL(2000-2024)
      </h3>

    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie
          data={ chartData >= 640 ?data :data2}
          dataKey="pv"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={radius} // responsive
            label={chartData >= 640 ? ({ name, percent }) => `${name} (${(percent*100).toFixed(0)}%)` : ({ name, percent }) => `${name}  (${(percent*100).toFixed(0)}%)`}

            
  labelLine={chartData >= 640} // only draw label lines on desktop
  fontSize={chartData < 640 ? 7 : 14} // smaller font on mobile
      className="font-bold"    
        >
          {data.map((_, i) => (
            <Cell key={i} fill={getColor(data.length, i)} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => value.toLocaleString()} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>



    </section>
  );
}

