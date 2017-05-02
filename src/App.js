import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Photos from './Photos';



class App extends Component {
  render() {
    return (
      <main className="container">
        <header className="page-header text-center">
          <h1>Photos</h1>
        </header>

        <Photos />
      </main>
    );
  }
}


export default App;









