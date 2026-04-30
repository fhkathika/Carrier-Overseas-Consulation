"use client"
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";
import { motion } from "framer-motion";
import Image from "next/image";
// Sample data
const data = [
  { name: "2000", totalManpower: 3384 },
  { name: "2001", totalManpower: 2858 },
  { name: "2002", totalManpower: 3683 },
  { name: "2003", totalManpower: 4301 },
  { name: "2004", totalManpower: 4920 },
  { name: "2005", totalManpower: 5826 },
  { name: "2006", totalManpower: 6062 },
  { name: "2007", totalManpower: 7800 },
  { name: "2008", totalManpower: 3534 },
  { name: "2009", totalManpower: 1768 },
  { name: "2010", totalManpower: 4209 },
  { name: "2011", totalManpower: 5165 },
  { name: "2012", totalManpower: 5721 },
  { name: "2013", totalManpower: 6535 },
  { name: "2014", totalManpower: 7402 },
  { name: "2015", totalManpower: 8096 },
  { name: "2016", totalManpower: 8804 },
  { name: "2017", totalManpower: 9497 },
  { name: "2018", totalManpower: 10903 },
  { name: "2019", totalManpower: 74 },
  { name: "2020", totalManpower: 3807 },
  { name: "2021", totalManpower: 3333 },
  { name: "2022", totalManpower: 4297 },
  { name: "2023", totalManpower: 4920 },
];

// const colors = ["#a5a1f7", "#d6d727", "#92cad1", "#086ca2", "	#79ccb3"];
const colors = ["#056875", "#086ca2", "	#D46600"];


const getColor = (index) => colors[index % colors.length];

export default function Chart2() {
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
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
      <div className="max-w-7xl mx-auto px-6  text-center block  mt-5 pt-8">
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    >
             <motion.div variants={itemRight}>
             <h2 className="text-1xl md:text-4xl font-bold ">
               Total Manpower Mobilized Through COCL (2001-2025)
             </h2>
             <h4 className="text-muted">
              24 Years of Excellence
          </h4>
        
    <div className="w-full flex justify-center">
      <Image
        src="/chart2Update.png"
        alt="About Us"
        width={1000}
        height={900}
        priority
      />
  
    </div>
      </motion.div>
      </motion.div>
    </div>
    // <div className="w-full sm:max-w-6xl mx-auto px-6 mt-12 text-center">
    //   <div className="mb-8">
    //     <h3 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">
    //       Total Manpower Mobilized Through COCL (2000-2024)
    //     </h3>
    //   </div>

    //   <div className="w-full h-[400px] bg-white rounded-3xl p-6 shadow-sm">
    //     <ResponsiveContainer width="100%" height="100%">
    //       <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
    //         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
    //         <XAxis 
    //           dataKey="name" 
    //           axisLine={false} 
    //           tickLine={false} 
    //           interval={"preserveStartEnd"} 
    //         />
    //         <YAxis axisLine={false} tickLine={false} />
    //         <Tooltip 
    //           contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}
    //         />
            
    //         {/* The Capsule Bars */}
    //         <Bar 
    //           dataKey="totalManpower" 
    //           barSize={25} 
    //           // radius={[5, 5, 5, 5]}
    //         >
    //           {data.map((entry, index) => (
    //             <Cell key={`cell-${index}`} fill={getColor(index)} />
    //           ))}
    //         </Bar>

    //         {/* The Line connecting the tops of the bars */}
    //         <Line 
    //           type="monotone" 
    //           dataKey="totalManpower" 
    //           stroke="#FF8042" // A contrasting color to make it visible
    //           strokeWidth={3} 
    //           dot={{ r: 4, fill: '#FF8042', strokeWidth: 2, stroke: '#fff' }} 
    //           activeDot={{ r: 6 }}
    //         />
    //       </ComposedChart>
    //     </ResponsiveContainer>
    //   </div>
    // </div>
  );
}