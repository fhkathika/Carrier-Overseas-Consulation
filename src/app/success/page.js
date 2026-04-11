import React from 'react'
import Testimonials from '../components/Testimonials'
import Chart from '../components/Chart'
import Chart2 from '../components/Chart2'
import Image from 'next/image'
import CountManPowerStatics from '../components/CountManPowerStatics'
import GloballyMobilizedCount from '../components/GloballyMobilizedCount'

export default function page() {

  return (
    <>
<section className='view'>
  <div className='block'>
 <Chart/>
  </div>
  <div className='block'>
 <CountManPowerStatics/>
  </div>
  <div className='block'>
    <Chart2/>
  </div>
  <div className='block'>
     
    <GloballyMobilizedCount/>
  </div>


</section>
   
           
    </>
  )
}
