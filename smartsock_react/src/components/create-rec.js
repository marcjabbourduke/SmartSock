import React from 'react'
import axios from 'axios';
import projectStyles from '../style.module.css'
import styles from './create-rec.module.css'
import PressureView from './pressure-view'

const https = require('https');



// const fetchData = async () => {
  

//   try {
//     setInterval(async () => {
//       const response = await axios.get(
//         'http://192.168.1.203/L'
//       );
//     }, 1000);
//   } catch(e) {
//     console.log(e);
//   }

// };


const fetchData = async () => {
  try {
    const instance = axios.create({
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
    });
    const res = instance.get('http://192.168.1.203');
    console.log(res);
    // const response = await axios.get(
    //   'http://192.168.1.203'
    // );
    // console.log("success");
    // console.log(response);
  } catch(e) {
    console.log(e);
  }

};

const setHigh = async () => {
  try {
    // setInterval(async () => {
      const response = await axios.get(
        'http://192.168.1.203/H'
      );
    // }, 1000);
  } catch(e) {
    console.log(e);
  }

};

const setLow = async () => {
  try {
    // setInterval(async () => {
      const response = await axios.get(
        'http://192.168.1.203/L'
      );
    // }, 1000);
  } catch(e) {
    console.log(e);
  }

};


const CreateRec = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <label className={styles.text}>Paired:</label>
      </div>
      <div className={styles.container01}>
        <div className={styles.container02}>
          <div className={styles.container03}>
            <div className={styles.container04}>
              <label className={styles.text1}>Name:</label>
            </div>
            <div className={styles.container05}>
              <label className={styles.text2}>Time:</label>
            </div>
            <div className={styles.container06}>
              <label className={styles.text3}>Notes:</label>
            </div>
          </div>
          <div className={styles.container07}>
            <div className={styles.container08}>
              <input
                type="text"
                className={` ${projectStyles.thqTextInput} ${styles.textinput} `}
              />
            </div>
            <div className={styles.container09}>
              <input
                type="text"
                className={` ${projectStyles.thqTextInput} ${styles.textinput1} `}
              />
            </div>
            <div className={styles.container10}>
              <input
                type="text"
                className={` ${projectStyles.thqTextInput} ${styles.textinput2} `}
              />
            </div>
          </div>
        </div>
        <div className={styles.container11}>
          <PressureView />
          {/* <button onClick={setHigh}> H </button>
          <button onClick={setLow}> L </button>
          <button onClick={fetchData}> Fetch Data </button> */}

          {/* <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='http://192.168.1.203';
            }}
          > Click here</button> */}
          {/* <span className={styles.text4}>Recording View Here</span> */}
        </div>
      </div>
    </div>
  )
}

export default CreateRec
