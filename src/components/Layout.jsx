import React from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Navigation from "./Navigation.jsx";

export default class Layout extends React.Component {

	constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div className="page-container">
				<div className="container-fluid header">
					<Header/>
				</div>
				{/* side menu */}
				<Navigation />
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							{/* main content area */}
							<div className="col-md-12 col-sm-12">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}
