"use client"

import { useEffect, useState } from "react";
export default function Reviews() {
    const [reviews, setReviews] = useState([]);
  async function getReview(){
try{const res=await fetch("/api/createReview")
const data=await res.json();
setReviews(data)
}
catch(error){
  console.log(error)
}
}
useEffect(()=>{
  getReview();
},[])
const allReview=getReview()
console.log("allReview..",allReview)
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
       What Our Clients Say
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-8 w-max">

            {reviews?.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2">{item?.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item?.comment}</p>
                <div className={`text-xl "text-yellow-500" `}>
{Array.from({ length: item?.rating }, (_, i) => (
      <span key={i} className="text-yellow-500">★</span>
    ))}
    {Array.from({ length: 5 - item?.rating }, (_, i) => (
      <span key={i} className="text-gray-300">★</span>
    ))}
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}