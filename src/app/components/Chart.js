"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart,Area} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import Image from 'next/image';

// #region Sample data
const data = [
  {
    name: 'Iraq',
    totalManpower: 9504,
    uv: 2400,
    amt: 2400,
  },
  {
    name: 'Qatar',
    totalManpower: 12357,
    uv: 1398,
    amt: 2210,
  },
  {
    name: 'Singapore',
    totalManpower: 3562,
    uv: 9800,
    amt: 2290,
  },
  {
    name: 'UAE & Dubai',
    totalManpower: 13315,
    uv: 3908,
    amt: 2000,
  },
  {
    name: 'Malaysia',
    totalManpower: 18967,
    uv: 4800,
    amt: 2181,
  },
  {
    name: 'Saudi Arabia',
    totalManpower: 69453,
    uv: 3800,
    amt: 2500,
  },
  {
    name: 'Rest Of',
    totalManpower: 64453,
    uv: 3800,
    amt: 2500,
  },

];
// #endregion

export default function Chart() {
  return (
      <section className="max-w-6xl mx-auto px-6 mt-6 text-center mb-2  ">
       
   <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8 mb-5">
    <h3 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center">
   Country-wise Total Manpower Mobilized Through COCL(2000-2024)
    </h3>
  </div>
   
    <div className='flex justify-center'>
 <AreaChart
      style={{ width: '100%', maxWidth: '900px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      onContextMenu={(_, e) => e.preventDefault()}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" niceTicks="snap125" />
      <YAxis width="auto" niceTicks="snap125" />
      <Tooltip />
      <Area type="monotone" dataKey="totalManpower" stroke="#e82e31" fill="#e82e31" />
      <RechartsDevtools />
    </AreaChart>
    </div>

    </section>
  );
}