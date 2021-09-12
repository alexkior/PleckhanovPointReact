import React from "../../../node_modules/react";

import ProfileMenu from '../ProfileMenu/ProfileMenu';
import ProfileStats from '../ProfileStats/ProfileStats';
import ProfileTable from '../ProfileTable/ProfileTable';

import { BrowserRouter as Router, Switch, Link } from "react-router-dom";



function Profile() {
  // const { data: chartData } = this.state;

  return (
    <>
      <section class="main__section_partial">
        <ProfileMenu />
        
        <Switch>
          <Router>
            <ProfileStats />
          </Router>

          <Router>
            <ProfileStats />
          </Router>
        </Switch>
      </section>

      <ProfileTable />
    </>
  );
}

export default Profile;
