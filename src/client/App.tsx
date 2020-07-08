import * as React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Add from './components/addChirp';

export default class App extends React.Component {

	render() {
		return (
			<main>
				<BrowserRouter>

				<section className="header">
					<div className="jumbotron-primary jumbotron-fluid header">
						<div className="container text-center">
						
							<h1 className="display-4 align-middle">Chirper</h1>
							
						</div>
						<br />
					</div>
					<Link className="link" to="/">Home</Link>
					<Link className="link" to="/add">Add Chirp</Link>
				</section>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/add" component={Add} />
						<Route exact path="/admin/:id" component={Admin} />
						<Redirect from="*" to="/"/>
					</Switch>
				</BrowserRouter>
			</main>

		);
	}
}