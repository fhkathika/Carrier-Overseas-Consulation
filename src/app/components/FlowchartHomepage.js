import Image from 'next/image'
import React from 'react'

export default function FlowchartHomepage() {
  return (
    <section className='py-16 bg-gray-100'>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center ">

  {/* Left Image */}
  <div className="w-full h-[300px] flex  justify-center text-center">
  <Image
    src="/manpower_services-removebg-preview.png"
    alt="About Us"
    width={300}
    height={300}
    className="object-contain"
  />
</div>

  {/* Right Content */}
  <div className="lg:col-span-2">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-center lg:text-left">
      Manpower Services
    </h2>

    <div className="p-4 sm:p-6 rounded-[30px_10px_30px_10px] lg:rounded-[60px_20px_60px_20px] bg-[#111827] shadow-md">
      <p className="text-white text-sm sm:text-base leading-relaxed">
    
          Career Overseas Consultants Ltd. (COCL) was set up as one of the subsidiartes of Ahmed Amin Group in order to effectively cater to the need of supply of technical, non-technical and professional manpower as per specific needs of the clients in different countries.
COCL is geared to meet the servicing requirements of International recruitments which call for possession of profes- slonal knowledge and experience in getting the proper person for the proper Job as per requirements of the clients. The capabilities of the COCL in accurately catering to the needs of the clients have been amply proved over two decade. The clients have greatly acknowledged and praised the capabilities of the COCL through innumerable letters of appreciation and their continuous cooperation with the COCL. On its part, the COCL has developed a very meticulous method of selection of manpower for different trades and professions through its highly trained and dedicated managers who devote their whole time in locating the best of the manpower for particular job whether technical or nontechnical. The result of all these efforts have served the purpose well to our clients and have given recognition to COCL as an excellent service provider organization.
Besides appredation and recognition received by COCL from the esteemed clients, the Government of Bangladesh has also recognized the valued services rendered by the COCL and has conferred the status of a Commercially Important Person (CIP) on the President of the Company.
  
      </p>
    </div>

  </div>
</div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 place-items-center">

    {/* Features */}
    <div className="lg:col-span-3 lg:col-start-6 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> In-House One-Stop Services
    </div>

    <div className="lg:col-span-3 lg:col-start-4 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Skilled & Certified Workforce
    </div>

    <div className="lg:col-span-4 lg:col-start-7 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Technical Training (MTTC Approved)
    </div>

    <div className="lg:col-span-3 lg:col-start-3 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Medical Testing (GCC Approved)
    </div>

    <div className="lg:col-span-4 lg:col-start-8 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Air Ticket & Travel Support (CTIL)
    </div>

    <div className="lg:col-span-3 lg:col-start-2 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Airport Coordination & Assistance
    </div>

    <div className="lg:col-span-4 lg:col-start-9 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Pre-Departure Briefing
    </div>

    <div className="lg:col-span-3 lg:col-start-1 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Safety & Compliance Guidance
    </div>

    {/* Circle in center */}
    <div className="lg:col-span-2 lg:col-start-6 flex justify-center">
      <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40
        text-lg sm:text-xl lg:text-2xl 
        text-white font-bold 
        border-4 lg:border-8 border-double 
        flex items-center justify-center text-center 
        bg-[#e82e31] rounded-full box-border">
        Why Choose Us!
      </div>
    </div>

    <div className="lg:col-span-3 lg:col-start-10 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Client Support & Backup Service
    </div>

    <div className="lg:col-span-3 lg:col-start-2 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> On-Site Problem Resolution
    </div>

    <div className="lg:col-span-3 lg:col-start-9 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Management-Level Assistance
    </div>

    <div className="lg:col-span-4 lg:col-start-3 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Worker Replacement Guarantee
    </div>

    <div className="lg:col-span-4 lg:col-start-8 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Quality & Performance Assurance
    </div>

    <div className="lg:col-span-3 lg:col-start-4 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Staff Management System
    </div>

    <div className="lg:col-span-3 lg:col-start-7 rounded-lg shadow-lg p-4 flex items-center justify-center text-center">
      <span className='text-green-500'>✔</span> Digital Information Management
    </div>

  </div>
</div>
         <div className="max-w-6xl mx-auto px-6 mt-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold  ">
            Candidate Process Flow Chart
                </h2>
        
             <div className='flex justify-center'>
              <Image
              src="/coclFlowchart.jpg"
              alt="About Us"
              width={1000}
          height={600}
            
              />
        
            </div>
        
       
        </div>
         {/* <div className="max-w-4xl mx-auto px-6 mt-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-10 ">
             Our Detailed Manpower Section Processing & Flow
                </h2>
        
             <div className='relative w-full aspect-[16/9]   flex justify-center'>
              <Image
              src="/detail_menpowerSectionFlow-copy1.png"
              alt="About Us"
              width={800}
          height={400}
              className='object-container rounded-xl '
              />
        
            </div>
        
       
        </div> */}

    </section>
  )
}
