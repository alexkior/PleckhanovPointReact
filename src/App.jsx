import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Pp from './components/Pp/Pp.jsx';
import About from './components/About/About.jsx';
import Events from './components/Events/Events.jsx';
import Shop from './components/Shop/Shop.jsx';
import Profile from './components/Profile/Profile.jsx';
import Structures from './components/Structures/Structures.jsx';
import Footer from './components/Footer/Footer.jsx';
// import Swiper from 'swiper/bundle';

function App() {
  return (
    <>
      <Header />
      <main class="main">
        {/* <section class="nav-adaptive">
          <div class="nav-adaptive__wrapper">
            <nav class="nav-adaptive__nav-bar">
              <Link to="/Pp">
                <a
                  href=""
                  class="nav-adaptive__nav nav_pp nav-adaptive__nav_active"
                ></a>
              </Link>

              <Link to="/About">
                <a href="" class="nav-adaptive__nav nav_about"></a>
              </Link>

              <Link to="/Events">
                <a
                  href=""
                  class="nav-adaptive__nav nav_events"
                ></a>
              </Link>

              <Link to="/Shop">
                <a href="" class="nav-adaptive__nav nav_shop"></a>
              </Link>

              <Link to="/Profile">
                <a href="" class="nav-adaptive__nav nav_profile">
                  <div class="nav-adaptive__nav_scores">
                    <p class="nav-adaptive__nav_scores-text">12k pp</p>
                  </div>
                </a>
              </Link>
            </nav>
          </div>
        </section> */}
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
      </main>
      <Footer />
    </>
  );
}

export default App;
