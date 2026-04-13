"use client";

import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <section className="section bg-gray-100 py-5">
      <div className="container">
 <h3 className="display-6 mb-3 text-center">
              How we can help you?
            </h3>

            <div
              className="mx-auto mb-4"
              style={{
                width: "80px",
                height: "2px",
                background: "#ef8788",
              }}
            />
        <div className="card shadow-sm">
          <div className="card-body p-4">

           

            <form onSubmit={handleSubmit}>

              <div className="row g-3">

                {/* LEFT */}
                <div className="col-md-6">

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control mb-3"
                    placeholder="Your Name"
                  />

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control mb-3"
                    placeholder="Email"
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-control mb-3"
                    placeholder="Phone"
                  />

                </div>

                {/* RIGHT */}
                <div className="col-md-6">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="6"
                    placeholder="Message"
                  />
                </div>

                <div className="col-12 mt-3">
                  <button className="btn btn-danger">
                    Get Started
                  </button>
                </div>

              </div>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}