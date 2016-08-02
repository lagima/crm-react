import React from "react";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import LeadThumbnail from '../components/LeadThumbnail.jsx';

export default class Dashboard extends React.Component {

	// handleChange(e) {
	// 	const title = e.target.value;
	// 	this.props.changeTitle(title);
	// }


	render() {

		return (
			<Grid fluid>
				<h1 class="page-header">Dashboard v2 <small>header small text goes here...</small></h1>
		    <Row>
			    <Col xs={12} md={3}>
			      <LeadThumbnail />
			    </Col>
			    <Col xs={12} md={3}>
			      <LeadThumbnail />
			    </Col>
			    <Col xs={12} md={3}>
			      <LeadThumbnail />
			    </Col>
					<Col xs={12} md={3}>
			      <LeadThumbnail />
			    </Col>
		    </Row>
		  </Grid>
		);
	}
}
