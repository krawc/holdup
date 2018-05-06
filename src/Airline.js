import React, { Component } from 'react';
import './App.css';
import bckgrd from './bckgrd.svg';

class Airline extends Component {

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

    let airline_list = this.props.airlines.filter(airline => airline.name.includes(this.props.airline));

    let airline_suggest = airline_list[0];

    let airline_suggest_name = '';

    if (this.props.airline) {
      if (airline_suggest) {
        airline_suggest_name = airline_suggest.name;
      } else {
        airline_suggest_name = '';
      }
    } else {
      airline_suggest_name = '';
    }

    let suggest_wo_type = airline_suggest_name.replace(this.props.airline, '');

    return (
      <div className="SingleField" id="airline_container">
       <div className="inputField">
        <label htmlFor="airline"></label>
        <p className="airline_type"><span className="visible">{this.props.airline}</span><span className="hidden">{suggest_wo_type}</span></p>
        <input id="airline" ref={this.input} name="airline" type="text"  value={this.props.airline} onKeyPress={this.onKeyPress} onChange={this.onChange}/>
       </div>
       <div className="questionField">
         <p className="question">What <strong>airline</strong> are you flying?</p>
       </div>
      </div>
    );
  }
}

export default Airline;
