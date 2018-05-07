import React, { Component } from 'react';
import './App.css';
import bckgrd from './bckgrd.svg';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';


class Day extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onClickCheck = this.onClickCheck.bind(this);

  }

  onChange(e) {
    this.props.onChange(e);
  }

  onKeyPress(e) {
    this.props.onKeyPress(e);
  }

  onClickCheck(e) {
    this.props.onClick(e);
  }

  render() {

    const materialTheme = createMuiTheme({
      overrides: {
        MuiPickerDTTabs: {
          tabs: {
            backgroundColor: '#f2c94c',
          },
        },
        MuiPaper: {
          elevation2: {
            boxShadow: 'none',
          },
        },
        MuiPickersClockPointer: {
          pointer: {
            backgroundColor: '#f2c94c',
          },
          thumb: {
            backgroundColor: '#f2c94c',
            border: '14px solid #f2c94c',
          },
        },
        MuiPickersClock: {
          pin: {
            backgroundColor: '#f2c94c',
          },
        },
        MuiPickersClockNumber: {
          selected: {
            backgroundColor: '#f2c94c',
          },
        },
        MuiTabs: {
          indicator: {
            backgroundColor: '#fff',
          },
        },
        MuiInput: {
          underline: {
            '&:after': {
              backgroundColor: '#222',
            },
          },
          input: {
            textAlign: 'center',
            fontFamily: 'Raleway, sans-serif',
            fontSize: '1.7em',
            width: '90vw',
          }
        },
        MuiTypography: {
          display1: {
            fontFamily: 'Raleway, sans-serif',
            textAlign: 'center',
            color: '#222',
          },
          display2: {
            fontFamily: 'Raleway, sans-serif',
            textAlign: 'center',
            color: '#222',
          },
          subheading: {
            fontFamily: 'Raleway, sans-serif',
            textAlign: 'center',
            color: '#222',
          },
          body1: {
            fontFamily: 'Raleway, sans-serif',
            textAlign: 'center',
          },
          day: {
            fontFamily: 'Raleway, sans-serif',
          },
          caption: {
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '600',
          },
        },
        MuiPickersToolbar: {
          toolbar: {
            backgroundColor: '#fff',
          },
        },
        MuiPickersToolbarButton: {
          toolbarBtn: {
            color: 'rgba(0, 0, 0, 0.54)',
          },
          toolbarBtnSelected: {
            color: '#222',
          },
        },
        MuiPickersDay: {
          day: {
            color: '#222',
          },
          selected: {
            backgroundColor: '#f2c94c',
            '&:hover': {
              backgroundColor: '#f2c94c',
            },
          },
          current: {
            color: '#f2c94c',
          },
        },
        MuiPickersModal: {
          dialogAction: {
            '& > span': {
              color: '#222',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: '600',
            },
          },
        },
      },
    });


    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MuiThemeProvider theme={materialTheme}>
          <div className="SingleField" id="day_container">
            <div className="inputField timeInputFields">
              <div className="calendar">
               <DateTimePicker
                  name="day"
                  value={this.props.day}
                  onChange={this.onChange}
                />
              </div>
              <p className="question">and <strong>when</strong> are you flying?</p>
           </div>
           <button className="submitBtn" onClick={this.onClickCheck}>
            CHECK THIS FLIGHT
           </button>
          </div>
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    );
  }
}

export default Day;
