import React from "react";

import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

export default class LeadThumbnail extends React.Component {

	render() {

		let title = <h3>Panel title</h3>;
		
		return (
			<Panel header={title} bsStyle="success">
	      <p>Panel content</p>
				<LinkContainer to={{ pathname: '/lead/555' }}>
					<Button bsStyle="primary">Button</Button>
				</LinkContainer>
	    </Panel>
		);
	}

}
