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
import { motion } from "framer-motion"
import Image from "next/image";


 const colors = [
"#056875", "#50C2E5", "#C9495E", "#086ca2", "	#D46600",
  "#A8DADC", // light cyan
  "#1D3557"  // dark navy
  ];


const getColor = (length, index) => {
  return colors[index % colors.length];
};
// const getColor = (length, index) => {
//   if (length <= colors.length) {
//     return colors[length - 1][index];
//   }

//   return colors[colors.length - 1][index % colors.length];
// };
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
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
const getAnimation = (direction = "right") => {
  if (isMobile) {
    return {
      hidden: { opacity: 0, y: 60 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      }
    };
  }

  return {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };
};
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] // smooth cubic-bezier
    }
  }
}
const itemRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}
  return (
<section className="w-full sm:max-w-6xl mx-auto sm:px-6 mt-6 text-center mb-2">
  
  <motion.div
    initial="hidden"
    whileInView="show"
  viewport={{ once: false, amount: 0.3 }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.25
        }
      }
    }}
  >

    {/* TITLE (from left on desktop) */}
    <motion.h2
      variants={getAnimation("left")}
      className="text-1xl md:text-4xl font-bold"
    >
      Country-wise Total Manpower Mobilized Through COCL(2001-2025)
    </motion.h2>

    {/* SUBTITLE */}
    <motion.p
      variants={getAnimation("left")}
      className="text-muted"
    >
      24 Years of Excellence
    </motion.p>

    {/* IMAGE (from right on desktop, bottom on mobile) */}
    <motion.div
      variants={getAnimation("right")}
      className="w-full flex justify-center"
    >
      <Image
        src="/chart1_Update.png"
        alt="About Us"
        width={1000}
        height={800}
        priority
      />
    </motion.div>

  </motion.div>

</section>
  );
}

