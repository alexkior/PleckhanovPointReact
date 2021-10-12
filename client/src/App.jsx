import { BrowserRouter as Router, Switch } from "react-router-dom";
import { memo, useEffect } from "react";
import "./body.css";

import Header from "./components/Header/Header.jsx";
import Pp from "./components/Pp/Pp.jsx";
import About from "./components/About/About.jsx";
import Events from "./components/Events/Events.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Structures from "./components/Structures/Structures.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { useDispatch, useSelector } from "react-redux";
// import { logOut } from "../../redux/actions/auth.actions";
import Auth from "./components/Auth/Auth.jsx";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div>Connected user with token {auth.usersIn}</div>
      <main class="main">
        {auth?.usersIn?.length >= 1 ? (
          <>
            <Switch>
              <Router exact path="/Pp">
                <Pp />
              </Router>

              <Router exact path="/About">
                <About />
              </Router>

              <Router exact path="/Events">
                <Events />
              </Router>

              <Router exact path="/Shop">
                <Shop />
              </Router>

              <Router exact path="/Profile">
                <Profile />
              </Router>

              <Router exact path="/Structures">
                <Structures />
              </Router>
            </Switch>
          </>
        ) : (
          <>
            <Auth />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default memo(App);
