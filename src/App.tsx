import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import About from './components/about/about';
import Footer from './components/footer/footer';

import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

function App() {
	return (
		<div className='App'>
            <BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
				</Switch>
				<Footer/>
			</BrowserRouter>
		</div>
	);
}

export default App;
