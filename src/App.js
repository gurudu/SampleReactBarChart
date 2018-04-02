import React, { Component } from 'react';
import './styles/App.css';
import DataComponent from './components/DataComponent';

class App extends Component {
  render() {
    return (
      <div >
       <h1 className="App-header"> Employees list</h1>
	   {Hallo}
       <DataComponent />
      </div>
    );
  }
}

export default App;
