import React, { Component } from "react";
import "./Component.css";
import Subnav from '../components/Subnav';

class Prevhead extends Component {
  render() {
    return (
      <div>
        <h2 className="ventureshead hey">Previous Work Experience</h2>
				<div className="ventureshead moving"><Subnav /><br /></div>
      </div>
    );
  }
}

export default Prevhead;
