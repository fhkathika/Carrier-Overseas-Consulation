import React, { useState } from 'react'

export default function StartRating({rating,setFormData}) {
    const handleRating=(value)=>{
        setFormData(prev=>({
            ...prev,
            rating:value
        }))
    }
  return (
    <div className='flex gap-1'>
        { [1,2,3,4,5].map((star)=>(
<span 
key={star}
onClick={()=>handleRating(star)}
className={`cursor-pointer text-2xl ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
>
    ★
</span>
        ))

        }
<p className='ml-2'>{rating}/5</p>
    </div>
  )
}
