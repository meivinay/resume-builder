import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";

let Login = () => {
  let history = useHistory();
  let user = useSelector((state) => state.user);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  // when we press the login button onAuthStateChanged change the state , the comp re-render, when re-render user is not null than it redirect to home
  return (
    <>
      {user ? <Redirect to="/home" /> : ""}
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Login</h1>
          <form className="mt-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
                class="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                id="exampleInputPassword1"
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                auth.signInWithEmailAndPassword(email, password);
              }}
              class="btn btn-primary"
            >
              Login
            </button>
            <br />
            <br />
            <button
              onClick={() => {
                history.push("/signup");
              }}
              class="btn btn-primary"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
