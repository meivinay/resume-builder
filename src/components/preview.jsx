import { useSelector } from "react-redux";
import "./css/preview.css";

let Preview = (props) => {
  let {
    fname,
    lname,
    city,
    state,
    email,
    phone,
    cgpa,
    college,
    degree,
    year,
    summary,
    skills,
  } = useSelector((state) => state.details);

  let templateCode = useSelector((state) => state.template);
  return (
    <>
      <div className="preview-container">
      <div className= "names">
      <div className="name-initials-box">
        {
          fname[0]
        }
        {
          lname[0]
        }
      </div>
        <div className={`name-contact-${templateCode}`}>
          <div className={`name-${templateCode}`}>
            <h1 className={`template-${templateCode}`}>
              {fname} {lname}
            </h1>
          </div>
          <div className="other-details">
            <div className={`contact-${templateCode}`}>
            <p className={`template-${templateCode}`}>{email}</p>
            <p className={`template-${templateCode}`}>{phone}</p>
            <p className={`template-${templateCode}`}>{city}</p>
            <p className={`template-${templateCode}`}>{state}</p>
          </div>
          </div>
      </div>
         
        </div>
      
        <div className="resume-body">
          <div className={`summary-${templateCode}`}>
            <h6>PROFESSIONAL SUMMARY</h6>
            <div>{summary}</div>
          </div>
          <div className="skills">
            <h6>SKILLS</h6>
            <ul>
              {skills.map((skill) => {
                return <li key="skill">{skill}</li>;
              })}
            </ul>
          </div>
          <div className="education">
            <h6>EDUCATION</h6>
            <div className={`education-details-${templateCode}`}>
              <span className={`template-${templateCode} degree`}>{degree}</span>
              <span className={`template-${templateCode}`}> {college}</span>
              <span className={`template-${templateCode}`}>cgpa {cgpa}</span>
              <span className={`template-${templateCode}`}>{year}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
