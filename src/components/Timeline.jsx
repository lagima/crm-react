import React from "react";

import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';

export default class Timeline extends React.Component {

  render() {

		let innerButton = <Button bsStyle="success">Submit</Button>;

    return (
			<div className="timeline-container">
				<h4><span>Timeline</span></h4>
				<ul className="timeline">
					<li>
							{ /* begin timeline-icon */ }
							<div className="timeline-icon">
									<a href="javascript:;"><i className="glyphicon glyphicon-comment"></i></a>
							</div>
							{ /* end timeline-icon */ }
							{ /* begin timeline-body */ }
							<div className="timeline-body">
									<Input type="text" placeholder="What did they say ?" buttonAfter={innerButton} standalone/>
							</div>
							{ /* begin timeline-body */ }
					</li>
			    <li>
			        { /* begin timeline-time */ }
			        <div className="timeline-time">
		            <span className="date">today</span>
		            <span className="time">04:20</span>
			        </div>
			        { /* end timeline-time */ }
			        { /* begin timeline-icon */ }
			        <div className="timeline-icon">
			          <a href="javascript:;"><i className="glyphicon glyphicon-send"></i></a>
			        </div>
			        { /* end timeline-icon */ }
			        { /* begin timeline-body */ }
			        <div className="timeline-body">
			            <div className="timeline-header">
			                <span className="userimage"><img src="/images/user-2.jpg" alt="" /></span>
			                <span className="username"><a href="javascript:;">John Smith</a> <small></small></span>
			                <span className="pull-right text-muted">18 Views</span>
			            </div>
			            <div className="timeline-content">
	                  <p>
	                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus.
	                      Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.
	                  </p>
			            </div>
			            <div className="timeline-footer">
			                <a href="javascript:;" className="m-r-15"><i className="glyphicon glyphicon-thumbs-up"></i> Like</a>
			                <a href="javascript:;"><i className="glyphicon glyphicon-comment"></i> Comment</a>
			            </div>
			        </div>
			        { /* end timeline-body */ }
			    </li>
			    <li>
			        { /* begin timeline-time */ }
			        <div className="timeline-time">
		            <span className="date">24 February 2014</span>
		            <span className="time">08:17</span>
			        </div>
			        { /* end timeline-time */ }
			        { /* begin timeline-icon */ }
			        <div className="timeline-icon">
			          <a href="javascript:;"><i className="glyphicon glyphicon-phone-alt"></i></a>
			        </div>
			        { /* end timeline-icon */ }
			        { /* begin timeline-body */ }
			        <div className="timeline-body">
			            <div className="timeline-header">
			                <span className="userimage"><img src="/images/user-2.jpg" alt="" /></span>
			                <span className="username">Richard Leong</span>
			                <span className="pull-right text-muted">1,282 Views</span>
			            </div>
			            <div className="timeline-content">
	                    <p>
	                        Quisque sed varius nisl. Nulla facilisi. Phasellus consequat sapien sit amet nibh molestie placerat. Donec nulla quam, ullamcorper ut velit vitae, lobortis condimentum magna. Suspendisse mollis in sem vel mollis.
	                    </p>
	                </div>
			            <div className="timeline-footer">
			                <a href="javascript:;" className="m-r-15"><i className="glyphicon glyphicon-thumbs-up"></i> Like</a>
			                <a href="javascript:;"><i className="glyphicon glyphicon-comment"></i> Comment</a>
			            </div>
			        </div>
			        { /* end timeline-body */ }
			    </li>
			    <li>
			        { /* begin timeline-icon */ }
			        <div className="timeline-icon">
			            <a href="javascript:;"><i className="glyphicon glyphicon-refresh"></i></a>
			        </div>
			        { /* end timeline-icon */ }
			        { /* begin timeline-body */ }
			        <div className="timeline-body">
			            Loading...
			        </div>
			        { /* begin timeline-body */ }
			    </li>
				</ul>
			</div>
    );
  }
}
