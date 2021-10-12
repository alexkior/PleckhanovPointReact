import React from "../../../node_modules/react";
import ProfileTable from '../ProfileTable/ProfileTable';
import ProfileHead from '../ProfileHead/ProfileHead.jsx';

import { BrowserRouter as Router, Switch, Link } from "react-router-dom";



function Profile() {
  // const { data: chartData } = this.state;

  return (
    <>
      <section class="main__section_profileHead">
        <ProfileHead />
      </section>

      <ProfileTable />
    </>
  );
}

export default Profile;
