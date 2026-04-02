"use client"
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <section className='py-16 bg-gray-100'>
<div className='max-w-7xl mx-auto  px-6 grid grid-cols-1 lg:grid-cols-2 gap-10'>
    {/* Left image  */}
    <div className='relative w-full h-[400px] '>
      <Image
      src="/aboutUs.jpg"
      alt="About Us"
      fill
      className='object-cover rounded-xl shadow-lg'
      />

    </div>
    {/* Right content  */}
    <div>
      {/* <p className='text-[#e82e31] font-semibold mb-3'>
        ABOUT US
      </p> */}
      <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
       A Legacy of Ethical Excellence
      </h2>
    <p className='text-gray-600 mb-6'>
           The COCL Story Established in 1998, Career Overseas Consultants Ltd.
            (COCL) is a premier subsidiary of the Ahmed Amin Group, founded by the Late Mr. Azharuddin Ahmed.
             We were established with the singular purpose of providing ethical, professional recruitment and placement services to meet the global demand for skilled personnel.
              Today, COCL is an ISO 9001:2015 certified company, recognized for maintaining the highest quality management standards in overseas placement.
    </p>
    {/* Features  */}
    <ul className='space-y-3 mb-8 text-gray-600'>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
      <p> <strong>Honesty & Trust:</strong> We are transparent with our clients and candidates, a reputation proven over decades of service.</p>
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
      	<p> <strong>Zero-Misfit Policy:</strong> Our goal is to serve clients by providing only the most suitable candidates, ensuring no "misfits" are sent to valued employers.</p>
      </li>
      <li className='flex items-center gap-3'><span className='text-[#e82e31]'>✔</span>
        <p>
    <strong>Technical Empowerment:</strong> Through our Multicraft Technical Training Center (MTTC), we ensure every candidate is trained and job-ready before mobilization.
  </p>
      </li>
      
    </ul>
    <p className='text-gray-600 mb-6'>Infrastructure and Expertise Operating from a 5,780 sq. ft. modern facility in Dhaka, 
        we offer One-Stop Services, including interviewing, trade testing, medical arrangements, and air ticketing. 
        Our operations are powered by a dedicated team of 93 professionals and an associate panel of industry experts.</p>
    </div>
    </div>

 
 {/* Our Vision  */}
   <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5  lg:gap-10 items-center ">
    
      {/* Left Image */}
      <div className="w-full sm:h-[300px] p-3 flex  justify-center text-center ">
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold  sm:mb-6 leading-tight  flex items-center  justify-center text-center lg:text-left ">
           Our Vision
        </h2>
    </div>
    
      {/* Right Content */}
      <div className="lg:col-span-4 ">
     <div className="p-4 sm:p-10 rounded-[30px_10px_30px_10px] lg:rounded-[120px_20px_120px_20px]  shadow-xl bg-[#111827] ">
          <p className="text-sm sm:text-base leading-relaxed text-white">
        Career Overseas Consultants Ltd. (COCL) is a subsidiary of Bed in Group is committed to delivering exceptional Manpower Placement Services to our overseas esteemed clients. We uphold the highest standards of professionalism, reliability and excellence in every aspect of our engage ments and services.
Our passion for innovation and dedication to growth know no bounds. We are steadfast In our pursuit of becoming the leading provider of overseas employment solutions. Client satisfaction is at the core of our values, and we believe it is the foundation of our success and growth. At COCL, we strive to enhance the lives of foreign-bound workers, contributing to the creation of a better future and more prosperous society.
Our vision is to be the trusted leader in ethical placement services, connecting professionals skilled and non skilles workers with companies who require those services to foster synergistic partner- ships that drive Innovation, efficiency, and mutual growth.
We continuously strive to set the benchmark for recruitment excellence on a global scale. With unwavering sincerity and commitment, we endeavor to be recognized as the best recruitment company in the industry. This goal is fueled by our strong collaboration with our valued clients, whose success is inextricably linked to our professional services towards their esteemed organiza- tions.
Our determination to excel is matched only by our drive to achieve greatness. With the cooperation of our clients, we believe we can achieve extraordinary results, reaching new heights and setting new standards in the Manpower Placement Services.
     </p>
        </div>
    
      </div>
    </div>
   
{/* organization */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 lg:gap-10 items-center">

  {/* Content */}
  <div className="lg:col-span-4 order-2 lg:order-1">
    <div className="p-4 sm:p-10 rounded-[30px_10px_30px_10px] lg:rounded-[120px_20px_120px_20px] shadow-xl bg-[#e82e31]">
      <p className="text-sm sm:text-base leading-relaxed text-white">
          Our biggest asset is our pool of human resources. A team of experienced, well-qualified and dynamic professionals recognized as experts in their own fields to cater to the needs of organization. COCL with its experienced and capable staff endeavors to continuously review and improve the services ensuring optimum satisfaction to the customers. COCL's cardinal principle is to uphold corruption free Code of Business Conduct and Ethics. We are honest and trustworthy with our customers, clients, candidates and co-workers and have been proved through time.
COCL currently employs 93 full-time personnel including Marketing professionals, Management experts and staff of other disciplines, associated with the job. Our success is in-fact, based on our highly dedicated and motivated employees. We encourage and assist our employees in developing relevant and transferable skills, encourage fostering teamwork, trust and new ideas. We empower our employees to come-up with innovative solutions acceptable through open discussion.
COCL's success springs from a relentless commitment to high standard of service and vast experience in Manpower business. COCL has earned this unique position by obtaining ISO 9001:2015 Certificate, proving its competence and maintaining the Quality Management System standard in overseas placement services in Bangladesh.
In addition, COCL has an associate panel of experts specializing in various fields whose services knowledge, and expertise are available to COCL whenever required.
COCL is proud of to fulfill its obligations, commitments, expectations, requirements and to deliver what COCL promises to deliver to its clients.
    
      </p>
    </div>
  </div>

  {/* Title */}
  <div className="w-full sm:min-h-[120px] p-3 flex justify-center lg:justify-start order-1 lg:order-2">
    <h2 className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
      Our Organization
    </h2>
  </div>

</div>


  
{/* facilities  */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 lg:gap-10 items-center ">
    
      {/* Left Image */}
      <div className="w-full sm:h-[300px] p-3 flex  justify-center text-center">
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold  sm:mb-6 leading-tight flex items-center  justify-center text-center lg:text-left">
           Our Facilities
        </h2>
    </div>
    
      {/* Right Content */}
      <div className="lg:col-span-4 ">
     <div className="p-4 sm:p-10 rounded-[30px_10px_30px_10px] lg:rounded-[120px_20px_120px_20px]  shadow-xl bg-[#111827] ">
          <p className="text-sm sm:text-base leading-relaxed text-white">
          Presently, COCL has a spacious office covering an area of 5780 sq. feet in Dhaka, wherein through total co-operation of the Group, in-house one stop services are provided covering interviewing prospective candidates, conducting trade tests, arranging medical tests, providing Air tickets and finally boarding the candidates to the place of their destination. These facilities have given COCL a clear edge over other recruiting agencies.
COCL offices are equipped with modern communications and fully computerized database. These are all managed by our team of dedicated office personnel.
COCL has very ambitious plans for growth and progress. In the last few months, COCL has and continue to endeavor to develop their organizational strength, manpower, and capacities to such an extent that they are able to take responsibility for any number and any category of manpower business of their line.
With the increase in growth oriented development in Bangladesh economy, coupled with the confidence of internationally reputed organizations, COCL is fully capable of shouldering all those responsibilities as a leading Manpower supplier in the global market.
Our steadfast commitment and dedication to our customers along with our future oriented perspective and our ability to overcome challenges, will allow us to accomplish our goals. We will continue to succeed and prosper with our customers as dreamt by the founder presidentk
    </p>
        </div>
    
      </div>
    </div>

  
{/* organigation chart  */}
    <div className="max-w-7xl mx-auto px-6  text-center ">
     <h2 className="text-2xl md:text-4xl font-bold md:mb-10  mt-5">
     Our Organization Chart
        </h2>
   <div className=" aspect-[16/9]">
     <div className='relative w-full aspect-[16/9] '>
      <Image
      src="/OrganizationChartUdate.png"
      alt="About Us"
      width={1200}
  height={800}
      className='object-container '
      />

    </div>

</div>
</div>
 {/* The founders */}
  <div className='max-w-7xl mx-auto  px-6 py-6 '>
     
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
    {/* Left image  */}
    <div className='relative w-full aspect-[16/9] '>
      <Image
      src="/founderPage04copy5.jpg"
      alt="About Us"
      width={1200}
  height={800}
      className='object-container rounded-xl shadow-lg'
      />

    </div>
    
    {/* Right content  */}
    
    <div className="flex items-center">
     
    <p className='text-gray-600 mb-6 align-center'>
            <span className=' block text-2xl text-black md:text-4xl font-bold mb-2 leading-tight text-center  font-semibold  sm:mb-6'>
       The Founders
      </span> 
Three ambitious brothers, guided by their father, a retired senior government official, after completing their higher education in abroad and acquiring extensive experience and knowledge in various multinational organizations In abroad, they returned to Bangladesh with a firm determination to leverage their knowledge, expertise and network to benefit the nation's economy. Aspired to make a significant impact on Bangladesh's burgeoning industry in placement services, they have been established Career Overseas Consultants Ltd; is one of the subsidiary of Amed in Group
to provide an ethical placement services to meet the growing demand of world market for professional, skilled, semi skilled and general workers.
Alongside their father, they successfully established what is now known as the Amed Agin Group. By assembling a team of highly experienced and qualified technocrats, economists, and commercial and marketing specialists, they laid a robust foundation for their enterprise.
    </p>
</div>
</div>
    </div>
<div className="text-center mt-12">
  <a
    href="/Brochure _COCL.pdf"
    download="Brochure _COCL.pdf"
    className="bg-[#111827] text-white px-10 py-5 rounded-lg hover:bg-green-700 transition"
  >
    Download Our Brochure
  </a>
</div>
    </section>
  )
}
