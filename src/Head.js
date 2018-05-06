import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Head extends Component {

   render() {

     return (
       <div className="Head">
        <div className="mini-logo">
          <img className="logo-svg" src={logo}/>
        </div>
       </div>
     );
   }
}

export default Head;
