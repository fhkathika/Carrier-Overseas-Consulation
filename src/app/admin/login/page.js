"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const router = useRouter()

 const handleLogin = () => {
    if (password === "superadmin123") {
      
      // ✅ SET COOKIE HERE
      document.cookie = "admin-auth=true; path=/"

      // redirect to admin dashboard
      router.push("/admin/create-job")
       router.refresh()
       window.location.reload()
      
    } else {
      alert("Wrong password")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          className="border p-2 w-full mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 w-full"
        >
          Login
        </button>
      </div>
    </div>
  )
}