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
<section>
  <div >
 <Chart/>
  </div>
  <div >
 <CountManPowerStatics/>
  </div>
  <div >
    <Chart2/>
  </div>
  <div>
     
    <GloballyMobilizedCount/>
  </div>


</section>
   
           
    </>
  )
}
