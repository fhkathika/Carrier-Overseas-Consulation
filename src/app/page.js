import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AllJobs from "./components/AllJobs";
import AboutUs from "./components/AboutUs";
import Reviews from "./components/Reviews";
async function getJobs(){
  const res=await fetch("http://localhost:3000/api/jobs",{
    cache:"no-store",
  })
 return  res.json()
}

 
export default async function Home() {
   const jobs= await getJobs()
  return (
    <>
    {/* <Navbar/> */}
    <Hero/>
    <section id="about">
    <AboutUs></AboutUs>
    </section>
    <section id="jobPortal">
    <AllJobs jobs={jobs}/>
    </section>


 

 <Reviews/>
  
   
    </>
  );
}
