"use client"

export default function Reviews() {
  const reviews = [
    {
      name: "Rahim Ahmed",
      text: "Very professional overseas consultancy service.",
      country: "UK Visa",
    },
    {
      name: "Sadia Khan",
      text: "They helped me process everything smoothly.",
      country: "Canada Work Permit",
    },
    {
      name: "Tanvir Hasan",
      text: "Highly recommended for student visa.",
      country: "Australia Student Visa",
    },
  ]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
       What Our Clients Say
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-8 w-max">

            {[...reviews, ...reviews].map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.text}</p>
                <span className="text-sm font-medium text-red-500">
                  {item.country}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}