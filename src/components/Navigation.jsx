import React from "react";

import Collapse from 'react-bootstrap/lib/Collapse';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

// var NavItemLink = ReactRouterBootstrap.NavItemLink;

export default class Navigation extends React.Component {

	// handleChange(e) {
	// 	const title = e.target.value;
	// 	this.props.changeTitle(title);
	// }
	constructor(...args) {
    super(...args);

    this.state = {};
  }

	handleSelect(selectedKey) {
	  // alert('selected ' + selectedKey);
	}

	render() {

		return (
			<div id="side-menu" className="hidden-sm hidden-xs">
				<Nav bsStyle="pills" stacked onSelect={this.handleSelect}>
					<NavItem className="nav-profile">
						<div class="image">
							<img src="/images/user-2.jpg" alt="" />
						</div>
						<div class="info">
							Sean Ngu
							<small>Front end developer</small>
						</div>
					</NavItem>
				</Nav>
				<Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
					<LinkContainer to={{ pathname: '/dashboard' }}>
						<MenuItem>
							<span className="glyphicon glyphicon-th" area-hidden="true"></span>
							<span className="hidden-sm hidden-xs">Dashboard</span>
						</MenuItem>
					</LinkContainer>
			    <NavItem eventKey={2} title="Item">
						<span className="glyphicon glyphicon-user" area-hidden="true"></span>
						<span className="hidden-sm hidden-xs">Comments</span>
					</NavItem>
			    <NavItem eventKey={3} disabled>
						<span className="glyphicon glyphicon-tags" area-hidden="true"></span>
						<span className="hidden-sm hidden-xs">Tags</span>
					</NavItem>
					<NavItem eventKey={4}>
						<span className="glyphicon glyphicon-list-alt" area-hidden="true"></span>
						<span className="hidden-sm hidden-xs">Article</span>
						<span className="label label-primary pull-right hidden-sm hidden-xs">20</span>
					</NavItem>
					<LinkContainer to={{ pathname: '/settings' }}>
					  <MenuItem>
							<span className="glyphicon glyphicon-cog" area-hidden="true"></span>
							<span className="hidden-sm hidden-xs">Settings</span>
						</MenuItem>
					</LinkContainer>
			  </Nav>

			</div>
		);
	}
}
