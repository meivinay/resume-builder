import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import "./components/css/app.css"
import Login from "./components/login";
import Navbar from "./components/navbar";
import PersonalData from "./components/personalData";
import PublicPreview from "./components/publicPreview";
import Qualifications from "./components/qualifications";
import SignUp from "./components/signup";
import { auth, firestore } from "./firebase";
import { userCreator } from "./redux/actions/userActions";
let App = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      // when authstatechange there is no role of useEffect in it,,,, it is a event subsribed to events of login and logout... user is remebered
      // dispatch is sending object to the store not the useCreator function
      // this will cause the state to change and the component that is currently mounted will re-render
      dispatch(userCreator(user));
      if (user) {
        let { uid, email } = user;
        let docRef = firestore.collection("users").doc(uid);

        let doc = await docRef.get();

        if (!doc.exists) {
          docRef.set({
            email,
          });
        }
      }
    });

    return () => {
      // run when we close our website
      unsub();
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/publicpreview/:rid">
            <PublicPreview />
          </Route>
          <Route path="/qualifications">
            <Qualifications />
          </Route>
          <Route path="/personal">
            <PersonalData />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
