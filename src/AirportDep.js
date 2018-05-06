import React, { Component } from 'react';
import './App.css';
import bckgrd from './bckgrd.svg';

class AirportDep extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.input = React.createRef();
  }

  onChange(e) {
    this.props.onChange(e);
  }

  onKeyPress(e) {
    this.props.onKeyPress(e);
  }

  componentDidMount() {
    this.input.current.focus();
  }

  render() {

    let airport_dep_list = this.props.airports.filter(airport => airport.code.includes(this.props.airport_dep.toUpperCase()));

    let airport_dep_suggest = airport_dep_list[0];

    let airport_dep_suggest_code = airport_dep_suggest ? airport_dep_suggest.code : "";

    let airport_dep_suggest_location = '';

    if (this.props.airport_dep) {
      if (airport_dep_suggest) {
        airport_dep_suggest_location = airport_dep_suggest.location;
      } else {
        airport_dep_suggest_location = 'This airport does not exist.';
      }
    } else {
      airport_dep_suggest_location = 'insert airport code';
    }
    return (
      <div className="SingleField" id="airport_dep_container">
       <div className="inputField">
        <label htmlFor="airport_dep"></label>
        <input id="airport_dep" ref={this.input} name="airport_dep" type="text" onKeyPress={this.onKeyPress} value={this.props.airport_dep} onChange={this.onChange}/>
        <p className="airport_dep_location">{airport_dep_suggest_location}</p>
       </div>
       <div className="questionField">
         <p className="question">Where do you <strong>leave</strong> from?</p>
       </div>
      </div>
    );
  }
}

export default AirportDep;
