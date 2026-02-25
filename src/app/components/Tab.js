"use client"
import React, { useState } from 'react'
export default function Tab({jobs}) {
      const [activeTab, setActiveTab] = useState("Describtion & Responsibility")
  return (
     <div className=" bg-gray shadow  rounded-lg p-4">

      {/* Tab Buttons */}
      <div className="flex bg-slate-100 rounded-md p-1">
        {["Describtion & Responsibility","Required Qualification"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-sm rounded-md transition ${
              activeTab === tab
                ? "bg-white shadow text-black"
                : "text-slate-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "Describtion & Responsibility" && (
          <div>
            {/* <h5 className="text-xl font-semibold">Describtion & Responsibility</h5> */}
            <p className="text-slate-600">
              {jobs?.describtion}
            </p>
          </div>
        )}

        {activeTab === "Required Qualification" && (
          <div>
            {/* <h5 className="text-xl font-semibold">Required Qualification</h5> */}
            <p className="text-slate-600">
             {jobs?.requirment}
            </p>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h5 className="text-xl font-semibold">Settings</h5>
            <p className="text-slate-600">
              This is settings content.
            </p>
          </div>
        )}
      </div>

    </div>
  )
}
