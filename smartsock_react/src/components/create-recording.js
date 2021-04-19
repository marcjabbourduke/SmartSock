import React, { Component } from 'react'
import axios from 'axios';
import styles from './pressure-view.module.css'
import PressureView from './pressure-view'
const https = require('https');


const reading1 = 0;
const reading2 = 55;
const reading3 = 140;
const reading4 = 190;
const reading5 = 130;
const reading6 = 66;
const reading7 = 80;
const allReadings = [reading1, reading2, reading3, reading4, reading5, reading6, reading7]



// const fetchData = async () => {
//     try {
//       const instance = axios.create({
//         httpsAgent: new https.Agent({  
//           rejectUnauthorized: false
//         })
//       });
//       const res = instance.get('http://192.168.1.203');
//       console.log(res);
//       // const response = await axios.get(
//       //   'http://192.168.1.203'
//       // );
//       // console.log("success");
//       // console.log(response);
//     } catch(e) {
//       console.log(e);
//     }
  
// };

// const fetchData = async () => {
//     setInterval(async () => {
//         const response = await axios.get(
//         'http://192.168.1.203/L'
//         );
//     }, 1000);
// }

const fetchData = async () => {
  setInterval(async () => {
      console.log(allReadings);
      allReadings[0] = allReadings[0] + 10;
      allReadings[1] = allReadings[1] + 10;
      allReadings[2] = allReadings[2] + 10;
      allReadings[3] = allReadings[3] + 10;
      allReadings[4] = allReadings[4] + 10;
      allReadings[5] = allReadings[5] + 10;
      allReadings[6] = allReadings[6] + 10;
  }, 1000);
}


const renderView = async () => {
    return(
        <PressureView allReadings={allReadings}/> 
    )
}

class CreateRecording extends React.Component {
  constructor() {
    super();
    this.state = { readings: allReadings };
  }
  
  render() {
    return (
      <div className={styles.maindiv}>
        <button onClick={fetchData} className={styles.button}> Create Recording </button>
        <PressureView allReadings={this.state.readings}/> 
      </div>
    )
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ readings: allReadings }), 1000);
  }
}



export default CreateRecording
