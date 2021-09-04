import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { templateCreator } from "../redux/actions/templateActions";
import "./css/home.css";
import skin1 from "../skin1.svg"
import skin2 from "../skin2.svg"

let Home = () => {
  let user = useSelector((state) => state.user);
  let history = useHistory();
  let dispatch = useDispatch();
  return (
    <>
      {user ? "" : <Redirect to="/login" />}

      <div className="template-container">
        <div
          onClick={() => {
            dispatch(templateCreator("A"));
            history.push("/personal");
          }}
          className="template"
        >
          <img src={skin1} alt="skin1" />
        </div>
        <div
          onClick={() => {
            dispatch(templateCreator("B"));
            history.push("/personal");
          }}
          className="template"
        >
          <img src={skin2} alt="skin2" />
        </div>
      </div>

      <button
        className="btn-primary home-logout-btn"
        onClick={() => {
          // when logou onauthstate change dispatch a action, causes state change in redux, cuurent comp re-render, user set to null , redirect to login
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
