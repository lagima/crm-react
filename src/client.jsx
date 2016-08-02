import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LeadDetail from "./pages/LeadDetail.jsx";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Dashboard} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/lead/:leadId" component={LeadDetail} />
		</Route>
	</Router>,
app);
