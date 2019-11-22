import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Button from '@material-ui/core/Button';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<p>
					Edit <code>src/App.tsx</code> and save to reload--wow Hot Reloading
					TEST GITHUB PAGES
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<body>
				<Button variant="contained" color="primary">
					Hello World
				</Button>
			</body>
		</div>
	);
};

export default App;
