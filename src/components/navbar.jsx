import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

let Navbar = () => {
let templateCode = useSelector((state)=> state.template)
let history = useHistory();
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Resume Builder
          </Link>
        </div>
        <div>
    {
      templateCode == null ? "":
        <button
        className="btn-primary home-logout-btn"
        onClick={() => {
          // when logou onauthstate change dispatch a action, causes state change in redux, cuurent comp re-render, user set to null , redirect to login
          auth.signOut();
          history.push("/login")
        }}
      >
        Logout
      </button>
    }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
