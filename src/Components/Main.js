import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Index from './Layout/Index';
import Lyrics from './Tracks/Lyrics';

export class Main extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>					
					<Route exact path="/" component={Index} />
					<Route exact path="/lyrics/track/:id" component={Lyrics} />
				</Switch>
			</React.Fragment>
		)
	}
}

export default Main;