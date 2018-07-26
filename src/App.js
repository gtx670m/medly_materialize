import React, { Component } from 'react';
import MyNavbar from './components/Navbar/MyNavbar';
import MySidenav from './components/Sidenav/MySidenav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <MySidenav/>
      </div>
    );
  }
}

export default App;
