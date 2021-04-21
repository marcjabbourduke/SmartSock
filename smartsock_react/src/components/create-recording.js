import React, { Component } from 'react'
import axios from 'axios';
import styles from './pressure-view.module.css'
import PressureView from './pressure-view'
const https = require('https');


const reading1 = 0;
const reading2 = 0;
const reading3 = 0;
const reading4 = 0;
const reading5 = 0;
const reading6 = 0;
const reading7 = 0;
const allReadings = [reading1, reading2, reading3, reading4, reading5, reading6, reading7]

class CreateRecording extends React.Component {
  constructor() {
    super();
    this.state = { 
      readings: allReadings,
      recording: false 
    };
    this.intervalID = 0;
  }
  
  render() {

    const fetchData = async () => {
      try {
        this.setState({ recording: true })
        const instance = axios.create({
          httpsAgent: new https.Agent({  
            rejectUnauthorized: false
          }),
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        });
        
        const res = await instance.get('http://192.168.1.204/').then(function (response) {
          allReadings[0] = response.data[0];
          allReadings[1] = response.data[1];
          allReadings[2] = response.data[2];
          allReadings[3] = response.data[3];
          allReadings[4] = response.data[4];
          allReadings[5] = response.data[5];
          allReadings[6] = response.data[6];
        })


      } catch(e) {
        console.log(e);
      }
    }

    const clearMyInterval = () => {
      this.setState({ recording: false })
      allReadings[0] = 0
      allReadings[1] = 0
      allReadings[2] = 0
      allReadings[3] = 0
      allReadings[4] = 0
      allReadings[5] = 0
      allReadings[6] = 0
      clearInterval(this.intervalID);
    }

    return (
      <div className={styles.maindiv}>
        { this.state.recording ? 
          <button onClick={clearMyInterval} className={styles.buttonStop}> Stop Recording </button> :
          <button onClick={fetchData} className={styles.button}> Create Recording </button>
        }
        <PressureView allReadings={this.state.readings}/> 
      </div>
    )
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ readings: allReadings }), 1000);
  }
}



export default CreateRecording
