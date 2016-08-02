import React from "react";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Timeline from "../components/Timeline.jsx";
import LeadProfileInfo from "../components/LeadProfileInfo.jsx";

export default class LeadDetail extends React.Component {

	constructor() {
    super();
    this.state = {
      title: "Lead Details",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
			<Grid fluid>
				<h1 className="page-header">Lead Details <small>header small text goes here...</small></h1>
				<div className="profile-container">
					<LeadProfileInfo />
					<Row>
						<Timeline />
					</Row>
				</div>
		  </Grid>
    );
  }
}
