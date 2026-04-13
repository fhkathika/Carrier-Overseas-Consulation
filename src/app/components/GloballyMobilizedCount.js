"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const data = [
  {
    country: "Saudi Arabia",
    src: "/saudi.png",
    percent: 52,
    labour: 52731,
    Skilled: 14221,
    Professionals: 2501,
  },
  {
    country: "Malaysia",
    src: "/malaysia.png",
    percent: 14,
    labour: 12919,
    Skilled: 4828,
    Professionals: 1222,
  },
  {
    country: "UAE & Dubai",
    src: "/united-arab-emirates.png",
    percent: 10,
    labour: 9598,
    Skilled: 2905,
    Professionals: 812,
  },
  {
    country: "Qatar",
    src: "/qatar.png",
    percent: 9,
    labour: 9152,
    Skilled: 2500,
    Professionals: 705,
  },
  {
    country: "Iraq",
    src: "/iraq.png",
    percent: 7,
    labour: 6822,
    Skilled: 2056,
    Professionals: 826,
  },
  {
    country: "Singapore",
    src: "/singapore.png",
    percent: 7,
    labour: 2109,
    Skilled: 832,
    Professionals: 521,
  },
];

export default function GloballyMobilizedCount() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true, // runs only once when visible
  });

  return (
    <div className="mx-auto p-6 mt-3 text-center mb-3 bg-light">
      <h2 className="text-1xl md:text-4xl font-bold mb-10">
        Total Manpower Mobilized Globally (2000-2024)
      </h2>

      <div ref={ref} className="row g-4">
        {data.map((info, i) => (
          <div key={i} className="col-lg-6 col-md-6">
            <div className="bg-white rounded shadow-sm p-4 d-flex align-items-center justify-content-between h-100">

              {/* LEFT */}
              <div className="d-flex flex-column align-items-center justify-content-center border-end pe-3">
                <img
                  src={info.src}
                  alt={info.country}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
                <p className="mt-2 fw-semibold small text-center">
                  {info.country}
                </p>
              </div>

              {/* RIGHT */}
              <div className="text-danger text-start ps-3 flex-grow-1">

                <p className="text-xl fw-bold mb-3 text-center">
                  {inView && (
                    <CountUp
                      key={inView}   // 🔥 IMPORTANT FIX
                      end={info.percent}
                      duration={2}
                    />
                  )}
                  %
                </p>

                <div className="d-flex justify-content-between">
                  <span className="fw-semibold">Labour</span>
                  <span className="fw-semibold">
                    {inView && (
                      <CountUp
                        key={inView + "l" + i}
                        end={info.labour}
                        duration={2}
                        separator=","
                      />
                    )}
                  </span>
                </div>

                <div className="d-flex justify-content-between">
                  <span className="fw-semibold">Skilled</span>
                  <span className="fw-semibold">
                    {inView && (
                      <CountUp
                        key={inView + "s" + i}
                        end={info.Skilled}
                        duration={2}
                        separator=","
                      />
                    )}
                  </span>
                </div>

                <div className="d-flex justify-content-between">
                  <span className="fw-semibold">Professional</span>
                  <span className="fw-semibold">
                    {inView && (
                      <CountUp
                        key={inView + "p" + i}
                        end={info.Professionals}
                        duration={2}
                        separator=","
                      />
                    )}
                  </span>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}