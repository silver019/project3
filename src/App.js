import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {
  Button,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <Navbar />
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">SportsPort</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Button color="danger">butt</Button>
//         <Home />
//       </div>
//     );
//   }
// }

const App = ({ children }) => (
  <div>
    <Navbar />

    <main>
      {children}
    </main>

    <Footer />
    </div>
);

export default App;
