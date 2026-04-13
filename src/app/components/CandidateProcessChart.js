import Image from "next/image";
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
    <section className="section py-5 mt-5">
      <div className="max-w-7xl mx-auto px-6  text-center block ">
          {/* <h3 className="display-4 m-0">
                     Candidate Process Chart
                   </h3> */}
          <div className=" ">
            <div className=' w-full m--auto d-flex justify-content-center align-items-center'>
             <Image
             src="/Candidate processing flowchart.png"
             alt="About Us"
             width={800}
         height={400}
             className='object-container '
             />
       
           </div>
       
       </div>
       </div>
    
    </section>
  );
}