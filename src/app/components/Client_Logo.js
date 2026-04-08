import React from "react";
import Image from "next/image";
//   { id: 1, src: "/clientLogoImg/img1.png" },
//   { id: 2, src: "/clientLogoImg/img2.png" },
//   { id: 3, src: "/clientLogoImg/img3.png" },
//   { id: 4, src: "/clientLogoImg/img4.png" },
//   { id: 5, src: "/clientLogoImg/img5.png" },
//   { id: 6, src: "/clientLogoImg/img6.png" },
//   { id: 7, src: "/clientLogoImg/img7.png" },
//   { id: 8, src: "/clientLogoImg/img8.png" },
//   { id: 9, src: "/clientLogoImg/img9.png" },
// ];
const client_logos = [];

for (let i = 3; i <= 178; i++) {
  client_logos.push({
    id: i,
    src: `/COCL Logos/${i}.jpg`
  });
}
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const groupedLogos = chunkArray(client_logos, 4);

export default function Client_Logo() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="mx-auto mb-12">
        <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center">
          Our Clients
        </h3>
        <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl bg-[#111827] py-2 mt-2">
          We owe our steady and solid growth to the following esteemed companies
        </p>
      </div>

   <div className="flex animate-scroll gap-4 w-max">
  {groupedLogos.map((group, index) => (
    <div key={index} className="min-w-[300px] p-2">
      
      <div className="grid grid-cols-2 gap-4">
        {group.map((item) => (
          <Image
            key={item.id}
            src={item.src}
            alt={`Client Logo ${item.id}`}
            width={150}
            height={80}
            className="object-contain"
          />
        ))}
      </div>

    </div>
  ))}
</div>
    </div>
  );
}