"use client";

import {
  FaHandshake,
  FaUserCheck,
  FaTools,
  FaLayerGroup,
  FaAward,
  FaUsers,
} from "react-icons/fa";

export default function AboutFeatueSection() {
  return (
    <section className="section py-5">
      <div className="container">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-4 my-3 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              A Legacy of Ethical Excellence
            </h2>

            <p className="text-gray-600 mb-6">
              The COCL Story Established in 1998, Career Overseas Consultants Ltd.
              (COCL) is a premier subsidiary of the Ahmed Amin Group...
            </p>
          </div>

          {/* COLUMN 1 */}
          <div className="col-sm-6 col-xl-4 my-3">

            <div className="border rounded p-3 p-lg-5 text-center">

              <div className="d-flex justify-content-center mb-3">
                <FaHandshake size={60} className="text-danger" />
              </div>

              <div className="pt-4">
                <h5>Honesty & Trust</h5>
                <p className="m-0">
                  Transparent recruitment practices with credibility.
                </p>
              </div>
            </div>

            <div className="border p-4 rounded mt-4 text-center">

              <div className="d-flex justify-content-center mb-2">
                <FaUserCheck size={40} className="text-danger" />
              </div>

              <h6>Zero-Misfit Policy</h6>
              <p className="m-0">
                Only suitable candidates are selected.
              </p>
            </div>

          </div>

          {/* COLUMN 2 */}
          <div className="col-sm-6 col-xl-4 my-3">

            <div className="border p-4 rounded mb-4 text-center">

              <div className="d-flex justify-content-center mb-2">
                <FaTools size={40} className="text-danger" />
              </div>

              <h6>Technical Empowerment</h6>
              <p className="m-0">
                Training via MTTC for job readiness.
              </p>
            </div>

            <div className="border rounded p-3 p-lg-5 text-center">

              <div className="d-flex justify-content-center mb-3">
                <FaLayerGroup size={60} className="text-danger" />
              </div>

              <div className="pt-4">
                <h5>One-Stop Services</h5>
                <p className="m-0">
                  Interview, medical, ticketing under one roof.
                </p>
              </div>
            </div>

          </div>

          {/* COLUMN 3 */}
          {/* <div className="col-sm-6 col-start-8 my-3 display-flex">

            <div className="border rounded p-3 p-lg-5 text-center">

              <div className="d-flex justify-content-center mb-3">
                <FaAward size={60} className="text-danger" />
              </div>

              <div className="pt-4">
                <h5>Global Recognition</h5>
                <p className="m-0">
                  ISO 9001:2015 certified company.
                </p>
              </div>
            </div>

            <div className="border p-4 rounded mt-4 text-center">

              <div className="d-flex justify-content-center mb-2">
                <FaUsers size={40} className="text-danger" />
              </div>

              <h6>Strong Workforce</h6>
              <p className="m-0">
                93 professionals & expert consultants.
              </p>
            </div>

          </div> */}

        </div>
      </div>
    </section>
  );
}