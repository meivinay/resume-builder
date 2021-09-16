import { Link } from "react-router-dom";
import { auth } from "../firebase";

let Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Resume Builder
          </Link>
        </div>
        <div>
        <button
        className="btn-primary home-logout-btn"
        onClick={() => {
          // when logou onauthstate change dispatch a action, causes state change in redux, cuurent comp re-render, user set to null , redirect to login
          auth.signOut();
        }}
      >
        Logout
      </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
