import {
  FaPlay,
  FaChalkboardTeacher,
  FaSearch,
  FaUserCheck,
  FaComments,
  FaTools,
  FaHeartbeat,
  FaFileAlt,
  FaPassport,
  FaFingerprint,
  FaFileSignature,
  FaPlane,
  FaSignOutAlt,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  "Start",
  "Lesson With Candidates",
  "Locating Application",
  "Screening Applicants",
  "Process For Interview",
  "Skill Test At Trade Test Center",
  "Process For Medical Test",
  "Documentation Submission For Immigration Permission From Ministry Of Manpower",
  "Passport Submission For Visa Stamp At The Embassy",
  "Fingerprint Process From Own Village",
  "Signing Of Employment Contract",
  "Travel Arrangement",
  "Departure",
  "Customer Handling Service",
];

// ICON MAP
const icons = [
  <FaPlay />,
  <FaChalkboardTeacher />,
  <FaSearch />,
  <FaUserCheck />,
  <FaComments />,
  <FaTools />,
  <FaHeartbeat />,
  <FaFileAlt />,
  <FaPassport />,
  <FaFingerprint />,
  <FaFileSignature />,
  <FaPlane />,
  <FaSignOutAlt />,
  <FaHeadset />,
];

export default function CandidateProcessChart() {
  const rows = [];
  const chunkSize = 4;

  for (let i = 0; i < steps.length; i += chunkSize) {
    let row = steps.slice(i, i + chunkSize);

    const rowIndex = i / chunkSize;
    const isEvenRow = rowIndex % 2 === 1;

    if (isEvenRow) {
      row = row.reverse();
    }

    rows.push(row);
  }

  return (
    <section className="section bg-light py-5 mt-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h3 className="display-6 mb-3">Candidate Process Steps</h3>
          <div
            className="mx-auto mb-4"
            style={{ width: 80, height: 2, background: "#e82e31" }}
          />
        </div>

        {/* FLOW */}
        {rows.map((row, rowIndex) => {
          return (
            <div
              key={rowIndex}
              className="row g-4 justify-content-center align-items-center"
            >

              {row.map((step, index) => {
                const globalIndex = rowIndex * 4 + index;

                return (
                  <div
                    key={index}
                    className="col-lg-3 col-sm-6 text-center"
                  >
                    <div
                      className="p-3 position-relative bg-white rounded mb-4  shadow-sm"
                      style={{
                        width: "260px",
                        height: "200px",
                      }}
                    >

                   

                      {/* NUMBER CIRCLE */}
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 text-white"
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#e82e31",
                        }}
                      >
                        <span className="fw-bold">
                          {String(globalIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
<div className=" d-flex flex justify-content-center align-items-center">
   <span style={{ color: "#ef8788", fontSize: "18px " }}>
    {icons[globalIndex]}
  </span>
  <h6 className="mb-0 mt-1 ml-2">{step}</h6>
 
</div>
                  
                    </div>
                  </div>
                );
              })}

            </div>
          );
        })}

      </div>
    </section>
  );
}