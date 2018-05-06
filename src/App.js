import React, { Component } from 'react';
import './App.css';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Head from './Head.js';
import bckgrd from './bckgrd.svg';
import AirportDep from './AirportDep.js';
import Airline from './Airline.js';
import AirportArr from './AirportArr.js';
import Day from './Day.js';
import { CSSTransition } from "react-transition-group";

class App extends Component {

  constructor(props) {
     super(props);
     this.handleDayChange = this.handleDayChange.bind(this);
     this.handleClickCheck = this.handleClickCheck.bind(this);
     this.handleKeyPress = this.handleKeyPress.bind(this);
     this.getComponentToRender = this.getComponentToRender.bind(this);
     this.handleModelClick = this.handleModelClick.bind(this);

     this.state = {
        isLoading: true,
        displayModel: false,
        inputNo: 0,
        airport_dep: '',
        airline: '',
        airport_arr: '',
        day: new Date(),
        month: 0,
        dayOfWeek: 0,
        hour: 0,
        result: '',
        error: null,
        airlines: [
          {
            code: 'AA',
            name: 'American'
          },
          {
            code: 'AS',
            name: 'Alaska'
          },
          {
            code: 'B6',
            name: 'JetBlue'
          },
          {
            code: 'DL',
            name: 'Delta'
          },
          {
            code: 'UA',
            name: 'United'
          },
          {
            code: 'WN',
            name: 'Southwest'
          },
        ],
        components: [
          {
            name: AirportDep,
            slug: 'airport_dep'
          },
          {
            name: Airline,
            slug: 'airline'
          },
          {
            name: AirportArr,
            slug: 'airport_arr'
          },
          {
            name: Day,
            slug: 'day'
          },
        ],
        airports: [  {  code: 'ABE',  location: 'Lehigh Valley, PA'  },  {  code: 'ABE',  location: 'Albuquerque, NM'  },  {  code: 'ACK',  location: 'Nantucket, MA'  },  {  code: 'AGS',  location: 'Augusta, GA'  },  {  code: 'ALB',  location: 'Albany, NY'  },  {  code: 'AMA',  location: 'Amarillo, TX'  },  {  code: 'ANC',  location: 'Anchorage, AK'  },  {  code: 'ATL',  location: 'Atlanta, GA'  },  {  code: 'ATW',  location: 'Appleton, WI'  },  {  code: 'AUS',  location: 'Austin, TX'  },  {  code: 'ATL',  location: 'Atlanta, TX'  },  {  code: 'AVL',  location: 'Asheville, NC'  },  {  code: 'AVP',  location: 'Avoca, PA'  },  {  code: 'BDL',  location: 'Bradley, CT'  },  {  code: 'BGR',  location: 'Bangor, ME'  },  {  code: 'BHM',  location: 'Birmingham–Shuttlesworth, AL'  },  {  code: 'BIL',  location: 'Billings, MT'  },  {  code: 'BIS',  location: 'Bismarck, ND'  },  {  code: 'BLI',  location: 'Bellingham, WA'  },  {  code: 'BNA',  location: 'Nashville, TN'  },  {  code: 'BOI',  location: 'Boise, ID'  },  {  code: 'BOS',  location: 'Boston Logan, MA'  },  {  code: 'BQN',  location: 'Rafael Hernandez Airport, Puerto Rico'  },  {  code: 'BTR',  location: 'Baton Rouge, LA'  },  {  code: 'BTV',  location: 'Burlington, VT'  },  {  code: 'BUF',  location: 'Buffalo Niagara, NY'  },  {  code: 'BUR',  location: 'Hollywood Burbank, CA'  },  {  code: 'BWI',  location: 'Baltimore-Washington, MD'  },  {  code: 'BZN',  location: 'Belgrade, MT'  },  {  code: 'CAE',  location: 'Columbia, SC'  },  {  code: 'CAK',  location: 'Akron-Canton, OH'  },  {  code: 'CHA',  location: 'Chattanooga, TN'  },  {  code: 'CHO',  location: 'Charlottesville, VA'  },  {  code: 'CHS',  location: 'Charleston, SC'  },  {  code: 'CLE',  location: 'Cleveland, OH'  },  {  code: 'CLT',  location: 'Charlotte, NC'  },  {  code: 'CMH',  location: 'Columbus, OH'  },  {  code: 'COS',  location: 'Colorado Springs, CO'  },  {  code: 'CRP',  location: 'Corpus Christi, TX'  },  {  code: 'CRW',  location: 'Yeager Airport, Charleston, WV'  },  {  code: 'CVG',  location: 'Cincinatti / N. Kentucky Intl, KY'  },  {  code: 'DAB',  location: 'Daytona Beach, FL'  },  {  code: 'DAL',  location: 'Dallas, TX'  },  {  code: 'DAY',  location: 'Dayton, OH'  },  {  code: 'DCA',  location: 'Reagan Airport, Washington, DC'  },  {  code: 'DEN',  location: 'Denver, CO'  },  {  code: 'DFW',  location: 'Dallas / Fort Worth, TX'  },  {  code: 'DLH',  location: 'Duluth, MN'  },  {  code: 'DSM',  location: 'Des Moines, IA'  },  {  code: 'DTW',  location: 'Detroit, MI'  },  {  code: 'ECP',  location: 'Northwest Florida Beaches, FL'  },  {  code: 'EGE',  location: 'Eagle County, CO'  },  {  code: 'ELP',  location: 'El Paso, TX'  },  {  code: 'EVV',  location: 'Evansville, IN'  },  {  code: 'EWR',  location: 'Newark Airport, NJ'  },  {  code: 'EYW',  location: 'Key West, FL'  },  {  code: 'FAI',  location: 'Fairbanks, AK'  },  {  code: 'FAR',  location: 'Fargo, ND'  },  {  code: 'FAT',  location: 'Fresno, CA'  },  {  code: 'FAY',  location: 'Fayetteville, NC'  },  {  code: 'FCA',  location: 'Kalispell, MT'  },  {  code: 'FLL',  location: 'Fort Laureldale-Hollywood, FL'  },  {  code: 'FNT',  location: 'Bishop Airport, Flint, MI'  },  {  code: 'FSD',  location: 'Sioux Falls, SD'  },  {  code: 'GEG',  location: 'Spokane, WA'  },  {  code: 'GNV',  location: 'Gainesville, FL'  },  {  code: 'GPT',  location: 'Gulfport-Biloxi, MS'  },  {  code: 'GRB',  location: 'Green Bay, WI'  },  {  code: 'GRR',  location: 'Gerald R. Ford Intl, Grand Rapids, MI'  },  {  code: 'GSO',  location: 'Greensboro, NC'  },  {  code: 'GSP',  location: 'Greenville-Spartanburg, SC'  },  {  code: 'GUC',  location: 'Gunnison County, CO'  },  {  code: 'GUM',  location: 'Guam Intl Airport'  },  {  code: 'HDN',  location: 'Yampa Valley, Steamboat Springs, CO'  },  {  code: 'HNL',  location: 'Honolulu, HI'  },  {  code: 'HOU',  location: 'Houston, TX'  },  {  code: 'HPN',  location: 'White Plains, NY'  },  {  code: 'HRL',  location: 'Harlingen, TX'  },  {  code: 'HSV',  location: 'Huntsville, AL'  },  {  code: 'HYA',  location: 'Hyannis, MA'  },  {  code: 'IAD',  location: 'Dulles, VA'  },  {  code: 'IAH',  location: 'Bush Airport, Houston, TX'  },  {  code: 'ICT',  location: 'Eisenhower Airport, Wichita, KS'  },  {  code: 'ILM',  location: 'Wilmington, NC'  },  {  code: 'IND',  location: 'Indianapolis, IN'  },  {  code: 'ISP',  location: 'MacArthur Airport, NY'  },  {  code: 'ITO',  location: 'Hilo, HI'  },  {  code: 'JAC',  location: 'Jackson, WY'  },  {  code: 'JAN',  location: 'Jackson-Medgar, MS'  },  {  code: 'JAX',  location: 'Jacksonville, FL'  },  {  code: 'JFK',  location: 'New York, NY'  },  {  code: 'JNU',  location: 'Juneau, AK'  },  {  code: 'KOA',  location: 'Kona, HI'  },  {  code: 'KTN',  location: 'Ketchikan, AK'  },  {  code: 'LAS',  location: 'Las Vegas, NV'  },  {  code: 'LAX',  location: 'Los Angeles, CA'  },  {  code: 'LBB',  location: 'Lubbock, TX'  },  {  code: 'LEX',  location: 'Lexington, KY'  },  {  code: 'LFT',  location: 'Lafayette, LA'  },  {  code: 'LGA',  location: 'LaGuardia Airport, New York, NY'  },  {  code: 'LGB',  location: 'Long Beach, CA'  },  {  code: 'LIH',  location: 'Lihue, HI'  },  {  code: 'LIT',  location: 'Little Rock, AR'  },  {  code: 'MAF',  location: 'Midland Airport, TX'  },  {  code: 'MCI',  location: 'Kansas City, MO'  },  {  code: 'MCO',  location: 'Orlando, FL'  },  {  code: 'MDT',  location: 'Harrisburg Intl, Middletown, PA'  },  {  code: 'MDW',  location: 'Midway Intl, Chicago, IL'  },  {  code: 'MEM',  location: 'Memphis, TN'  },  {  code: 'MFE',  location: 'McAllen, TX'  },  {  code: 'MHT',  location: 'Manchester, NH'  },  {  code: 'MIA',  location: 'Miami, FL'  },  {  code: 'MKE',  location: 'Milwaukee, WI'  },  {  code: 'MLB',  location: 'Melbourne, FL'  },  {  code: 'MOB',  location: 'Mobile, AL'  },  {  code: 'MSN',  location: 'Madison, WI'  },  {  code: 'MSO',  location: 'Missoula, MT'  },  {  code: 'MSP',  location: 'Minneapolis-Saint Paul, MI'  },  {  code: 'MSY',  location: 'New Orleans, LA'  },  {  code: 'MTJ',  location: 'Montrose, CO'  },  {  code: 'MVY',  location: 'Marthas Vineyard, MA'  },  {  code: 'MYR',  location: 'Myrtle Beach, SC'  },  {  code: 'OAK',  location: 'Oakland, CA'  },  {  code: 'OGG',  location: 'Kahului, HI'  },  {  code: 'OKC',  location: 'Oklahoma City, OK'  },  {  code: 'OMA',  location: 'Omaha, NE'  },  {  code: 'ONT',  location: 'Ontario, CA'  },  {  code: 'ORD',  location: "O'Hare Intl, Chicago, IL"  },  {  code: 'ORF',  location: 'Norfolk, VA'  },  {  code: 'ORH',  location: 'Worcester, MA'  },  {  code: 'PBI',  location: 'Palm Beach, FL'  },  {  code: 'PDX',  location: 'Portland, OR'  },  {  code: 'PHL',  location: 'Philadelphia, PA'  },  {  code: 'PHX',  location: 'Phoenix, AZ'  },  {  code: 'PIT',  location: 'Pittsburgh, PA'  },  {  code: 'PNS',  location: 'Pensacola, FL'  },  {  code: 'PSC',  location: 'Tri-Cities Airport, Pasco, WA'  },  {  code: 'PSE',  location: 'Mercedita, Puerto Rico'  },  {  code: 'PSP',  location: 'Palm Springs, CA'  },  {  code: 'PVD',  location: 'Providence, RI'  },  {  code: 'PWM',  location: 'Portland Intl, ME'  },  {  code: 'RAP',  location: 'Rapid City, SD'  },  {  code: 'RDU',  location: 'Raleigh-Durham, NC'  },  {  code: 'RIC',  location: 'Richmond, VA'  },  {  code: 'RNO',  location: 'Reno, NV'  },  {  code: 'ROA',  location: 'Roanoke, VA'  },  {  code: 'ROC',  location: 'Rochester, NY'  },  {  code: 'RSW',  location: 'Southwest Florida Intl'  },  {  code: 'SAN',  location: 'San Diego, CA'  },  {  code: 'SAT',  location: 'San Antonio, TX'  },  {  code: 'SAV',  location: 'Savannah, GA'  },  {  code: 'SDF',  location: 'Louisville, KY'  },  {  code: 'SEA',  location: 'Seattle, WA'  },  {  code: 'SFO',  location: 'San Francisco, CA'  },  {  code: 'SGF',  location: 'Springfield, MO'  },  {  code: 'SHV',  location: 'Shreveport, LA'  },  {  code: 'SIT',  location: 'Sitka, AK'  },  {  code: 'SJC',  location: 'San Jose, CA'  },  {  code: 'SJU',  location: 'San Juan, Puerto Rico'  },  {  code: 'SLC',  location: 'Salt Lake City, Utah'  },  {  code: 'SMF',  location: 'Sacramento, CA'  },  {  code: 'SNA',  location: 'Orange County, CA'  },  {  code: 'SRQ',  location: 'Sarasota, FL'  },  {  code: 'STL',  location: 'St. Louis, MO'  },  {  code: 'STT',  location: 'St. Thomas, Virgin Islands'  },  {  code: 'STX',  location: 'St. Croix, Virgin Islands'  },  {  code: 'SWF',  location: 'New Windsor, NY'  },  {  code: 'SYR',  location: 'Syracuse, NY'  },  {  code: 'TLH',  location: 'Tallahassee, FL'  },  {  code: 'TPA',  location: 'Tampa, FL'  },  {  code: 'TRI',  location: 'Tri-Cities, TN'  },  {  code: 'TUL',  location: 'Tulsa, OK'  },  {  code: 'TUS',  location: 'Tucson, AZ'  },  {  code: 'TVC',  location: 'Traverse City, MI'  },  {  code: 'TYS',  location: 'Knoxville, TN'  },  {  code: 'VPS',  location: 'Northwest Florida Airport'  },  {  code: 'XNA',  location: 'Northwest Arkansas Airport'  }]};

   }

   handleChange(e) {
      let change = {};
      change[e.target.name] = e.target.value;
      this.setState(change);
   }

   handleDayChange(e) {
     let date = e;
     let month = date.getMonth() + 1;
     let dayOfWeek = date.getDay() + 1; // getDay returns zero-indexed day
     let hours = date.getHours();
     hours = ("0" + hours).slice(-2);
     let minutes = date.getMinutes();
     minutes = ("0" + minutes).slice(-2);
     let hourStr = hours.toString() + minutes.toString();
     let hour = parseInt(hourStr);
     this.setState({
       day: date,
       month: month,
       dayOfWeek: dayOfWeek,
       hour: hour
     });
     console.log(hour);
  };

   handleClickCheck(event) {
     event.preventDefault();

     let airline = this.state.airlines.filter(carrier => carrier.name.includes(this.state.airline)); // the input to API needs to be an airline code - we need the full object
     let airport_dep = 'airport_dep_'+ this.state.airport_dep;
     let airport_arr = 'airport_arr_'+ this.state.airport_arr;

     const submit = {
      	"month": this.state.month,
      	"dayOfWeek": this.state.dayOfWeek,
      	"hour": this.state.hour,
      	"airline": 'airline_' + airline[0].code,
      	"airport_dep": airport_dep,
      	"airport_arr": airport_arr
      }

     fetch('https://delaypredict.herokuapp.com/api/predict', {
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
       method: 'POST',
       body: JSON.stringify(submit),
     })
     .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json()
            .then(function(err) {
              throw new Error("There's an error upstream and it says " + err.message);
            });
        }
      })
      .then(data =>
        this.setState({ result: data.result, isLoading: false })
      )
      .catch(error => this.setState({ error: error, isLoading: false }));;
      console.log(submit);
      console.log(this.state.airline);
      console.log(this.state.result);
      console.log(this.state.error);


   }

   handleKeyPress(e) {
     if (e.key === 'Enter') {
       let inputNo = this.state.inputNo;
       inputNo = inputNo + 1;
       this.setState({
         inputNo: inputNo
       });
       console.log(this.state.inputNo);
     }
   }

   handleModelClick(e) {
     e.preventDefault();
      this.setState({
        displayModel: true
      });
      console.log(this.state.displayModel);
   }

   getComponentToRender() {
     let inputNo = this.state.inputNo;
     switch (inputNo) {
       case 0:
         return (<AirportDep key={'airport_dep'} airports={this.state.airports} onKeyPress={this.handleKeyPress} onChange={this.handleChange.bind(this)} airport_dep={this.state.airport_dep}/>);
       case 1:
         return (<Airline key={'airline'} airlines={this.state.airlines} onKeyPress={this.handleKeyPress} onChange={this.handleChange.bind(this)} airline={this.state.airline}/>);
       case 2:
         return (<AirportArr key={'airport_arr'} airports={this.state.airports} onKeyPress={this.handleKeyPress} onChange={this.handleChange.bind(this)} airport_arr={this.state.airport_arr}/>);
       case 3:
         return (<Day key={'day'} airports={this.state.airports} onKeyPress={this.handleKeyPress} onChange={this.handleDayChange} onClick={this.handleClickCheck} day={this.state.day}/>);
       default:
         return (<AirportDep key={'airport_dep'} airports={this.state.airports} onKeyPress={this.handleKeyPress} onChange={this.handleChange.bind(this)} airport_dep={this.state.airport_dep}/>);
     }

   }

   render() {

      let airports_all = this.state.airports;

      let theResult = '';
      let resultDescr = '';

      if (this.state.result) {
        theResult = this.state.result === 'ONTIME' ? 'ON TIME!' : 'HOLDUP!';
        resultDescr = this.state.result === 'ONTIME' ? 'Your flight is probably fine.' : 'Your flight is likely to be delayed.';
      }

       return (
         <div className="App">
            <Head/>
            <div className="query-container">
            <CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
              >
              {this.getComponentToRender()}
              </CSSTransitionGroup>
            </div>

        <CSSTransition
          in={this.state.isLoading === false}
          timeout={300}
          classNames="response"
        >
        <div className="response">
         <h2 className="theResult">{theResult}</h2>
         <p className="resultDescr">{resultDescr}</p>
         <button className="howtho" onClick={this.handleModelClick}>(How do we know?)</button>
        </div>
        </CSSTransition>
        <CSSTransition
          in={this.state.displayModel}
          timeout={300}
          classNames="model"
        >
        <div className="model">
        </div>
        </CSSTransition>
         </div>
       );
      }
}

export default App;
