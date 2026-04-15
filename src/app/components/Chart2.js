"use client"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";
import { motion } from "framer-motion"
import { ResponsiveContainer } from "recharts";
// Sample data
const data = [
  { name: "2000", uv: 4000, totalManpower: 3384, amt: 2400 },
  { name: "2001", uv: 3000, totalManpower: 2858, amt: 2210 },
  { name: "2002", uv: 2000, totalManpower: 3683, amt: 2290 },
  { name: "2003", uv: 2780, totalManpower: 4301, amt: 2000 },
  { name: "2004", uv: 1890, totalManpower: 4920, amt: 2181 },
  { name: "2005", uv: 2390, totalManpower: 5826, amt: 2500 },
  { name: "2006", uv: 3490, totalManpower: 6062, amt: 2100 },
  { name: "2007", uv: 3490, totalManpower: 7800, amt: 2100 },
  { name: "2008", uv: 3490, totalManpower: 3534, amt: 2100 },
  { name: "2009", uv: 3490, totalManpower: 1768, amt: 2100 },
  { name: "2010", uv: 3490, totalManpower: 4209, amt: 2100 },
  { name: "2011", uv: 3490, totalManpower: 5165, amt: 2100 },
  { name: "2012", uv: 3490, totalManpower: 5721, amt: 2100 },
  { name: "2013", uv: 3490, totalManpower: 6535, amt: 2100 },
  { name: "2014", uv: 3490, totalManpower: 7402, amt: 2100 },
  { name: "2015", uv: 3490, totalManpower: 8096, amt: 2100 },
  { name: "2016", uv: 3490, totalManpower: 8804, amt: 2100 },
  { name: "2017", uv: 3490, totalManpower: 9497, amt: 2100 },
  { name: "2018", uv: 3490, totalManpower: 10903, amt: 2100 },
  { name: "2019", uv: 3490, totalManpower: 74, amt: 2100 },
  { name: "2020", uv: 3490, totalManpower: 3807, amt: 2100 },
  { name: "2021", uv: 3490, totalManpower: 3333, amt: 2100 },
  { name: "2022", uv: 3490, totalManpower: 4297, amt: 2100 },
  { name: "2023", uv: 3490, totalManpower: 4920, amt: 2100 },
];
const colors =  [
"#1c3464",
 "#034569",
 "#235b79",
  "#086ca2",
  "#3c9dd0"
];

const getColor = (length, index) => {
  return colors[index % colors.length];
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
export default function Chart2() {
  
  return (
   <div  className="w-full sm:max-w-6xl mx-auto px-6 mt-6 text-center  sm:h-[350px] md:h-[400px]">
    <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
                  <motion.div variants={item}>
  <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8  sm:mb-15">
    <h3 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center">
      Total Manpower Mobilized Through COCL (2000-2024)
    </h3>
  </div>

  <div className="flex justify-center px-2 md:px-3 lg:px-3  h-[300px] sm:h-[200px] md:h-[300px]" >
      <ResponsiveContainer >
    <BarChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 20,
        left: 10,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      
   
    <Bar dataKey="totalManpower" barSize={30}>
  {data.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={getColor(data.length, index)}  />
  ))}
</Bar>
    </BarChart>
    </ResponsiveContainer>
  </div>
</motion.div>
</motion.div>
</div>

  );
}