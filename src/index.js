import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gallery from './Gallery';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
		<BrowserRouter>
			<div>
			<Route exact path='/' component={App}/>
			<Route path='/gallery' component={Gallery}/>
			</div>
		</BrowserRouter>,

	document.getElementById('root'));
registerServiceWorker();
