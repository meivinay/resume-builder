import Preview from "./preview";
import "./css/form.css";
import { useDispatch, useSelector } from "react-redux";
import { detailCreator } from "../redux/actions/detailsActions";
import { useHistory } from "react-router-dom";
import { useState } from "react";

let PersonalData = () => {
  let details = useSelector((state) => state.details);
  let [currentSkill, setSkill] = useState("");
  let { fname, lname, email, phone, city, state, summary, skills } = details;

  let history = useHistory();

  let dispatch = useDispatch();

  return (
    <>
      <div className="personal-container">
        <div className="personal-form">
          <h2 className="m-4">Personal Details</h2>
          <div class="row m-3">
            <div class="col-5">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                value={fname}
                onChange={(e) => {
                  dispatch(detailCreator({ fname: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5 mb-3 txt-box">
              <input
                value={lname}
                onChange={(e) => {
                  dispatch(detailCreator({ lname: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Last name"
              />
            </div>

            <div className="col-5 mb-3 txt-box">
              <input
                value={email}
                onChange={(e) => {
                  dispatch(detailCreator({ email: e.currentTarget.value }));
                }}
                type="email"
                class="form-control"
                placeholder="Email"
              />
            </div>
            <div className="col-5 mb-3 txt-box">
              <input
                value={phone}
                onChange={(e) => {
                  dispatch(detailCreator({ phone: e.currentTarget.value }));
                }}
                type="number"
                class="form-control"
                placeholder="Phone"
              />
            </div>

            <div className="col-5 mb-3 txt-box">
              <input
                value={city}
                onChange={(e) => {
                  dispatch(detailCreator({ city: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="City"
              />
            </div>

            <div className="col-5 mb-3 txt-box">
              <input
                value={state}
                onChange={(e) => {
                  dispatch(detailCreator({ state: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="State"
              />
            </div>
          </div>
          <div className="summary-input ">
            <input
              className=" form-control"
              onChange={(e) => {
                dispatch(detailCreator({ summary: e.currentTarget.value }));
              }}
              type="text"
              placeholder="professional summary"
              value={summary}
            ></input>
          </div>
          <div className="skills-input">
            <input
              onKeyDown={(e) => {
                if ((e.key === "Enter")) {
                  dispatch(
                    detailCreator({ skils: skills.push(e.target.value) })
                  );
                  setSkill("");
                }
              }}
              onChange={(e) => {
                setSkill(e.target.value);
              }}
              type="text"
              class="form-control"
              placeholder="skills"
              value={currentSkill}
            ></input>
          </div>
          <button
            onClick={() => {
              history.push("/qualifications");
            }}
            className="btn btn-primary m-4"
          >
            Next
          </button>
        </div>
        <Preview />
      </div>
    </>
  );
};

export default PersonalData;
