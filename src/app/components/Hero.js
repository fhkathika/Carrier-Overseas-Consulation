"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center text-center px-6">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Start Your <span className="text-red-500">Global Career</span> Journey 🌍
        </h1>

        {/* Sub Text */}
        <p className="text-lg md:text-xl mb-8 text-gray-600">
          We guide you to work & settle abroad successfully with expert consultation.
        </p>

        {/* Button */}
        <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300 shadow-md">
          Book Free Consultation
        </button>

      </motion.div>
    </section>
  )
}
