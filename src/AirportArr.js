import React, { Component } from 'react';
import './App.css';
import bckgrd from './bckgrd.svg';

class AirportArr extends Component {

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

    let airport_arr_list = this.props.airports.filter(airport => airport.code.includes(this.props.airport_arr.toUpperCase()));

    let airport_arr_suggest = airport_arr_list[0];

    let airport_arr_suggest_code = airport_arr_suggest ? airport_arr_suggest.code : "";

    let airport_arr_suggest_location = '';

    if (this.props.airport_arr) {
      if (airport_arr_suggest) {
        airport_arr_suggest_location = airport_arr_suggest.location;
      } else {
        airport_arr_suggest_location = 'This airport does not exist.';
      }
    } else {
      airport_arr_suggest_location = 'insert airport code';
    }
    return (
      <div className="SingleField" id="airport_arr_container">
       <div className="inputField">
        <label htmlFor="airport_arr"></label>
        <input id="airport_arr" ref={this.input} name="airport_arr" type="text"  value={this.props.airport_arr} onKeyPress={this.onKeyPress} onChange={this.onChange}/>
        <p className="airport_arr_location">{airport_arr_suggest_location}</p>
       </div>
       <div className="questionField">
         <p className="question">Where do you <strong>arrive</strong>?</p>
       </div>
      </div>
    );
  }
}

export default AirportArr;
