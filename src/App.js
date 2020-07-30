import React from 'react';
import './App.css';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from './Context';
 
function App() {
  return (
  	<Provider>
	  	<BrowserRouter>
		    <div className="App">
		      <Main />
		    </div>
		</BrowserRouter>
	</Provider>
  );
}

export default App;
