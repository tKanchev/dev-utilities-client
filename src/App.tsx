import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

function App() {
	return (
		<div className='App'>
            <Navbar />
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
