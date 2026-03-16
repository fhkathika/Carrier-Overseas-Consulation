"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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
      <section className="py-5 bg-gray-50 max-w-6xl mx-auto px-10   ">
            <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12'>
    <h3 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center'>
   Country-wise Total Manpower Mobilized Through COCL(2000-2024)
    </h3>
  </div>
    <LineChart
   style={{ width: '100%', maxWidth: '900px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis dataKey="name" stroke="var(--color-text-3)" />
      <YAxis width="auto" stroke="var(--color-text-3)" />
      <Tooltip
        cursor={{
          stroke: 'var(--color-border-2)',
        }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="totalManpower"
        stroke="#2b2857"
         strokeWidth={4}  
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
      />
      {/* <Line
        type="monotone"
        dataKey="uv"
        stroke="var(--color-chart-2)"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{ stroke: 'var(--color-surface-base)' }}
      /> */}
      <RechartsDevtools />
    </LineChart>

    </section>
  );
}