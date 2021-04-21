import React from 'react'
import axios from 'axios';
import projectStyles from '../style.module.css'
import styles from './shock.module.css'

const Shock = () => {
  const send1L = async ()  => {
    try {
        const response = await axios.get(
          'http://192.168.1.205/A'
        );
        const timer = setTimeout( async () => {
          const response = await axios.get(
            'http://192.168.1.205/B'
          );
        }, 2000);
    } catch(e) {
      console.log(e);
    }
  }

  const send2L = async ()  => {
    try {
      const response = await axios.get(
        'http://192.168.1.205/C'
      );
      const timer = setTimeout( async () => {
        const response = await axios.get(
          'http://192.168.1.205/D'
        );
      }, 2000);
    
    } catch(e) {
    console.log(e);
    }
  }

  const send3L = async ()  => {
    try {
      const response = await axios.get(
        'http://192.168.1.205/E'
      );
      const timer = setTimeout(async () => {
        const response = await axios.get(
          'http://192.168.1.205/F'
        );
      }, 2000);    
    } catch(e) {
    console.log(e);
    }
  }

  const send4L = async ()  => {
    try {
      const response = await axios.get(
        'http://192.168.1.205/G'
      );
      const timer = setTimeout(async () => {
        const response = await axios.get(
          'http://192.168.1.205/H'
        );
      }, 2000);    
    } catch(e) {
    console.log(e);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container01}>
        <div className={styles.container02}>
          <div className={styles.container03}>
            <span className={styles.text}>Paired:</span>
          </div>
          <div className={styles.div}>
            <div className={styles.container04}>
              <span className={styles.text1}>Loaded Workout</span>
            </div>
            <div className={styles.container05}>
              <span className={styles.text2}>Loaded Workout</span>
            </div>
          </div>
        </div>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <span className={styles.text3}>
              Tap To Send Shocks
              <br />
            </span>
          </div>
          <div className={styles.div3}>
            <img
              src="/playground_assets/feeet-final.png"
              className={` ${projectStyles.thqImage} ${styles.image} `}
            />
            <div className={styles.container06}>
              <div className={styles.container07}>
                <button onClick={send1L} className={` ${projectStyles.thqButton} ${styles.button} `}>1L</button>
                <button onClick={send2L} className={` ${projectStyles.thqButton} ${styles.button01} `}>2L</button>
                <button onClick={send3L} className={` ${projectStyles.thqButton} ${styles.button02} `}>3L</button>
                <button onClick={send4L} className={` ${projectStyles.thqButton} ${styles.button04} `}>4L</button>
              </div>
              <div className={styles.container08}>
                <button className={` ${projectStyles.thqButton} ${styles.button05} `}>1R</button>
                <button className={` ${projectStyles.thqButton} ${styles.button06} `}>2R</button>
                <button className={` ${projectStyles.thqButton} ${styles.button07} `}>3R</button>
                <button className={` ${projectStyles.thqButton} ${styles.button09} `}>4R</button>
              </div>
            </div>
          </div>
          <div className={styles.container09}>History</div>
        </div>
      </div>
    </div>
  )
}

export default Shock
