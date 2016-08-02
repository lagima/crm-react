import React from "react";

// import Input from 'react-bootstrap/lib/Input';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class LeadProfileInfo extends React.Component {

  render() {
    return (
			<div>
				<h4>Micheal	Meyer <small>Lorraine Stokes</small></h4>
				<Row>
					<Col xs={12} md={6}>
						<table className="table table-profile">
							<tbody>
									<tr className="highlight">
											<td className="field">Mood</td>
											<td><a href="#">Add Mood Message</a></td>
									</tr>
									<tr className="divider">
											<td colspan="2"></td>
									</tr>
									<tr>
											<td className="field">Mobile</td>
											<td><i className="fa fa-mobile fa-lg m-r-5"></i> +1-(847)- 367-8924 <a href="#" className="m-l-5">Edit</a></td>
									</tr>
									<tr>
											<td className="field">Home</td>
											<td><a href="#">Add Number</a></td>
									</tr>
									<tr>
											<td className="field">Office</td>
											<td><a href="#">Add Number</a></td>
									</tr>
									<tr className="divider">
											<td colspan="2"></td>
									</tr>
									<tr className="highlight">
											<td className="field">About Me</td>
											<td><a href="#">Add Description</a></td>
									</tr>
							</tbody>
						</table>
					</Col>
					<Col xs={12} md={6}>
						<table className="table table-profile">
							<tbody>
									<tr className="highlight">
											<td className="field">Mood</td>
											<td><a href="#">Add Mood Message</a></td>
									</tr>
									<tr className="divider">
											<td colspan="2"></td>
									</tr>
									<tr>
											<td className="field">Mobile</td>
											<td><i className="fa fa-mobile fa-lg m-r-5"></i> +1-(847)- 367-8924 <a href="#" className="m-l-5">Edit</a></td>
									</tr>
									<tr>
											<td className="field">Home</td>
											<td><a href="#">Add Number</a></td>
									</tr>
									<tr>
											<td className="field">Office</td>
											<td><a href="#">Add Number</a></td>
									</tr>
									<tr className="divider">
											<td colspan="2"></td>
									</tr>
									<tr className="highlight">
											<td className="field">About Me</td>
											<td><a href="#">Add Description</a></td>
									</tr>
							</tbody>
						</table>
					</Col>
				</Row>
					{ /* begin table */ }
					<div className="table-responsive">

					</div>
					{ /* end table */ }
			</div>
    );
  }
}
