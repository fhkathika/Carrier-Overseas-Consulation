"use client";

import {
  FaEye,
  FaBuilding,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";
import { motion } from "framer-motion"
export default function Vision() {
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] // smooth cubic-bezier
    }
  }
}
  return (
    <>
    
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
                <motion.div variants={item}>
    
    <section className="section bg-light py-5">
      <div className="container">

        {/* STEP 1 */}
        <div className="row justify-content-center align-items-center">
        <div className="col-xxl-12 col-lg-12 my-3">
         <section className="section py-5">
      <div className="container">

        {/* HEADING */}
        <div className="row section-heading mb-4">
          <div className="col-lg-7 col-md-12">
            <h2 className="display-6 m-0">
              Our Vision
            </h2>
          </div>
         

          <div className="col-lg-5 col-md-12">
            <div className="fs-5 w-lg-80">
              COCL is committed to becoming a global leader in ethical manpower placement services.
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="row justify-content-center">

          {/* CARD 1 */}
          <div className="col-lg-4 my-3">
            <div className="bg-warning bg-opacity-10 px-3 py-4 px-lg-4 py-lg-5 rounded hover-top">

              <div className="fs-1 text-warning">
                <i className="bi bi-globe2"></i>
              </div>

              <div className="pt-4">
                <h4>Global Recognition</h4>
                <p className="m-0 lead w-lg-80">
                  To be recognized as a trusted global manpower recruitment leader
                  delivering ethical and professional overseas employment solutions.
                </p>
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-4 my-3">
            <div className="bg-info bg-opacity-10 px-3 py-4 px-lg-4 py-lg-5 rounded hover-top">

              <div className="fs-1 text-info">
                <i className="bi bi-graph-up-arrow"></i>
              </div>

              <div className="pt-4">
                <h4>Sustainable Growth</h4>
                <p className="m-0 lead w-lg-80">
                  To continuously grow with innovation, professionalism, and
                  strong global partnerships in manpower placement services.
                </p>
              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-lg-4 my-3">
            <div className="bg-success bg-opacity-10 px-3 py-4 px-lg-4 py-lg-5 rounded hover-top">

              <div className="fs-1 text-success">
                <i className="bi bi-people-fill"></i>
              </div>

              <div className="pt-4">
                <h4>Human Empowerment</h4>
                <p className="m-0 lead w-lg-80">
                  To empower skilled and unskilled workers by creating better
                  overseas employment opportunities and improving lives.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
          </div>
        </div>

        <div className="divider opacity-2 mx-auto w-60 my-5"></div>

       
      </div>
    </section>
    </motion.div>
    </motion.div>

     <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
                <motion.div variants={item}>
    <section className="section  py-5">
      <div className="container">
 {/* STEP 2 */}
        <div className="row justify-content-center align-items-center flex-row-reverse">
        

          <div className="col-xxl-12 col-lg-12 my-3">
            <section className="section py-5">
      <div className="container">

        {/* HEADING */}
        <div className="row section-heading mb-4">
          <div className="col-lg-7 col-md-12">
            <h2 className="display-6 m-0">
              Our Organization
            </h2>
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="fs-5 w-lg-80">
              A strong team of professionals driving COCL’s excellence in global manpower services.
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="row justify-content-center">

          {/* CARD 1 */}
          <div className="col-lg-4 my-3">
            <div className="bg-info bg-opacity-10 px-3 py-4 px-lg-4 py-lg-5 rounded hover-top">

              <div className="fs-1 text-info">
                <i className="bi bi-people-fill"></i>
              </div>

              <div className="pt-4">
                <h4>Skilled Workforce</h4>
                <p className="m-0 lead w-lg-80">
                  A team of experienced, well-qualified and dynamic professionals
                  recognized as experts in their respective fields ensuring
                  quality manpower solutions.
                </p>
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-4 my-3">
            <div className="bg-warning bg-opacity-10 px-3 py-4 px-lg-4 py-lg-5 rounded hover-top">

              <div className="fs-1 text-warning">
                <i className="bi bi-shield-check"></i>
              </div>

              <div className="pt-4">
                <h4>Ethics & Integrity</h4>
                <p className="m-0 lead w-lg-80">
                  COCL follows a strict code of business ethics ensuring transparency,
                  honesty, and corruption-free operations with all clients and candidates.
                </p>
              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-lg-4 my-3">
            <div className="bg-success bg-opacity-10 px-3 py-4 px-lg-4 py-lg-5 rounded hover-top">

              <div className="fs-1 text-success">
                <i className="bi bi-graph-up-arrow"></i>
              </div>

              <div className="pt-4">
                <h4>Growth & Excellence</h4>
                <p className="m-0 lead w-lg-80">
                  Driven by continuous improvement, ISO 9001:2015 certification,
                  and strong commitment to global manpower service excellence.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
          </div>
        </div>

        <div className="divider opacity-2 mx-auto w-60 my-5"></div>

      
    
       
      </div>
    </section>
    </motion.div>
    </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
                <motion.div variants={item}>
    <section className="section bg-light py-5">
      <div className="container">

         {/* STEP 3 */}
        <div className="row justify-content-center align-items-center">
         <div className="col-xxl-12 col-lg-12 my-3">
          <section className="section py-5">
      <div className="container">

        {/* HEADING */}
        <div className="row section-heading mb-4">
          <div className="col-lg-7 col-md-12">
            <h2 className="display-6 m-0">
              Our Facilities
            </h2>
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="fs-5 w-lg-80">
              Modern infrastructure and one-stop manpower solutions ensuring efficiency and excellence.
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="row justify-content-center">

          {/* CARD 1 */}
          <div className="col-lg-4 my-3">
            <div className="bg-success bg-opacity-10 px-3 py-4 px-lg-4 py-lg-5 rounded hover-top">

              <div className="fs-1 text-success">
                <i className="bi bi-building"></i>
              </div>

              <div className="pt-4">
                <h4>Modern Infrastructure</h4>
                <p className="m-0 lead w-lg-80">
                  A spacious 5,780 sq. ft. office in Dhaka equipped with modern
                  communication systems and a fully computerized database for efficient operations.
                </p>
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-4 my-3">
            <div className="bg-info bg-opacity-10 px-3 py-4 px-lg-4 py-lg-5 rounded hover-top">

              <div className="fs-1 text-info">
                <i className="bi bi-gear-wide-connected"></i>
              </div>

              <div className="pt-4">
                <h4>One-Stop Services</h4>
                <p className="m-0 lead w-lg-80">
                  Complete in-house solutions including candidate interviews,
                  trade testing, medical arrangements, ticketing, and deployment support.
                </p>
              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-lg-4 my-3">
            <div className="bg-warning bg-opacity-10 px-3 py-4 px-lg-4 py-lg-5 rounded hover-top">

              <div className="fs-1 text-warning">
                <i className="bi bi-bar-chart-line"></i>
              </div>

              <div className="pt-4">
                <h4>Growth & Capability</h4>
                <p className="m-0 lead w-lg-80">
                  Strong operational capacity and continuous development enabling
                  COCL to handle large-scale manpower requirements globally.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
          </div>
        </div>

        <div className="divider opacity-2 mx-auto w-60 my-5"></div>

       
      </div>
    </section>
    </motion.div>
    </motion.div>
    </>
  );
}