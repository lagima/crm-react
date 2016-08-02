import React from "react";

import Navbar from 'react-bootstrap/lib/Navbar';
import Input from 'react-bootstrap/lib/Input';

export default class Footer extends React.Component {

  handleChange(e) {

  }

  render() {
    return (
			<div className="row">
	      <footer id="admin-footer" className="clearfix">
					<div className="pull-left">
						<b>Copyright</b>&copy; 2016
					</div>
					<div className="pull-right">
						Admin System
					</div>
	      </footer>
			</div>
    );
  }
}
