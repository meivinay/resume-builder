import { useSelector } from "react-redux";
import "./css/preview.css";

let Preview = (props) => {
  let { fname, lname, city, state, email, phone, cgpa, college, degree, year,summary,skills } =
    useSelector((state) => state.details);

  let templateCode = useSelector((state) => state.template);
  return (
    <>
      <div className="preview-container">
      <div className = {`name-contact-${templateCode}`}>
      <div className = {`name-${templateCode}`}>
        <h1 className={`template-${templateCode}`}>{fname} {lname}</h1>
      </div>
      <div className = {`contact-${templateCode}`}>
        <p className={`template-${templateCode}`}>{email}</p>
        <p className={`template-${templateCode}`}>{phone}</p>
        <p className={`template-${templateCode}`}>{city}</p>
        <p className={`template-${templateCode}`}>{state}</p>
</div>
</div>
  <div className = "resume-body">
  <div className={`summary-${templateCode}`}>
    <h6>PROFESSIONAL SUMMARY</h6>
    <div>{summary}</div>
  </div>
  <div className="skills">
    <h6>SKILLS</h6>
    <ul>
    {
      skills.map((skill)=>{
        return <li key="skill">{skill}</li>
      })
    }
    </ul>
  </div>
  <div className="experience">
    <h6>EXPERIENCE</h6>
  </div>
  <div className="education">
    <h6>EDUCATION</h6>
    <div className={`education-details-${templateCode}`}>
        <p className={`template-${templateCode}`}>{college}</p>
        <p className={`template-${templateCode}`}>{degree}</p>
        <p className={`template-${templateCode}`}>{cgpa}</p>
        <p className={`template-${templateCode}`}>{year}</p>
    </div>
  </div>
      </div>
      </div>
    </>
  );
};

export default Preview;
