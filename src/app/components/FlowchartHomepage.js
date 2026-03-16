import Image from 'next/image'
import React from 'react'

export default function FlowchartHomepage() {
  return (
    <section className='py-16 bg-gray-100'>
<div className='max-w-7xl mx-auto  px-6 grid grid-cols-1 lg:grid-cols-2 gap-10'>
    {/* Left image  */}
    <div className='relative w-full h-[400px] '>
      <Image
      src="/manpower_services-removebg-preview.png"
      alt="About Us"
      fill
      className='object-cover rounded-xl '
      />

    </div>
    {/* Right content  */}
    <div>
     
      <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
      Manpower Services
      </h2>
    <p className='text-gray-600 mb-6'>
          Career Overseas Consultants Ltd. (COCL) was set up as one of the subsidiartes of Ahmed Amin Group in order to effectively cater to the need of supply of technical, non-technical and professional manpower as per specific needs of the clients in different countries.
COCL is geared to meet the servicing requirements of International recruitments which call for possession of profes- slonal knowledge and experience in getting the proper person for the proper Job as per requirements of the clients. The capabilities of the COCL in accurately catering to the needs of the clients have been amply proved over two decade. The clients have greatly acknowledged and praised the capabilities of the COCL through innumerable letters of appreciation and their continuous cooperation with the COCL. On its part, the COCL has developed a very meticulous method of selection of manpower for different trades and professions through its highly trained and dedicated managers who devote their whole time in locating the best of the manpower for particular job whether technical or nontechnical. The result of all these efforts have served the purpose well to our clients and have given recognition to COCL as an excellent service provider organization.
Besides appredation and recognition received by COCL from the esteemed clients, the Government of Bangladesh has also recognized the valued services rendered by the COCL and has conferred the status of a Commercially Important Person (CIP) on the President of the Company.
    </p>
 
   
    </div>
    </div>
         <div className="max-w-2xl mx-auto px-6 mt-6 ">
             <h2 className="text-3xl md:text-4xl font-bold mb-10 ">
            Why Choose Us!
                </h2>
        
             <div className='relative w-full aspect-[16/9]'>
             <ul className='space-y-3 mb-8 text-gray-600'>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
      <p> In-House One Stop Services available.</p>
      </li>
      <li className='flex  gap-3'><span className='text-[#e82e31]'>✔</span>
      	<p> Thoroughly trained and tested employees. COCL organizes
either upgrading or additional training to employees at its own Multicraft Technical Training Center (MTTC), duly approved by the Government.
</p>
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
        <p>
   Arrange medical test through its own Group Medical Test
Center (Salmon Medical) duly approved by GCC
  </p>
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
        <p>

Arrange Air Ticket through its own Group Travel Agency, Career Travel International Ltd. (CTIL) and rendezvous at airport. 
  </p>
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
        <p>
  Comprehensive briefing to the candidates about country's rules and regulations as well as safety rules of their place of working.
</p>
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
        <p>
  A complete backup and Interactive support service by COCL's Senior Management. So, uniquely if any onsite difficulties arises, Company Management at COCL's expense visits the overseas site for problem solution with the client to maintain the commitment towards our clients.
</p>
      </li>
      <li className='flex  gap-3'><span className='text-[#e82e31]'>✔</span>
        <p>
  A -day probationary period guarantee to replace at COCL's own
cast If any worker found to be medically unfit, technically
Incompetent or behaviorally unacceptable.
COCL's staff management and computer Information

</p>
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
        <p>
COCL's staff management and computer Information

</p>
      </li>
      
    </ul>
        
            </div>
        
       
        </div>
         <div className="max-w-2xl mx-auto px-6 mt-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-10 ">
             Our Organigation Chart
                </h2>
        
             <div className='relative w-full aspect-[16/9]   flex justify-center'>
              <Image
              src="/candidateProcessChartpage14.png"
              alt="About Us"
              width={500}
          height={500}
              className='object-container rounded-xl '
              />
        
            </div>
        
       
        </div>
         <div className="max-w-4xl mx-auto px-6 mt-6 text-center">
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
        
       
        </div>
    </section>
  )
}
