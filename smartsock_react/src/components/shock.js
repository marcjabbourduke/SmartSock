import React from 'react'

import projectStyles from '../style.module.css'
import styles from './shock.module.css'

const Shock = () => {
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
              src="/playground_assets/feet-t7ce-1100h.png"
              className={` ${projectStyles.thqImage} ${styles.image} `}
            />
            <div className={styles.container06}>
              <div className={styles.container07}>
                <button className={` ${projectStyles.thqButton} ${styles.button} `}>1L</button>
                <button className={` ${projectStyles.thqButton} ${styles.button01} `}>2L</button>
                <button className={` ${projectStyles.thqButton} ${styles.button02} `}>3L</button>
                <button className={` ${projectStyles.thqButton} ${styles.button03} `}>4L</button>
                <button className={` ${projectStyles.thqButton} ${styles.button04} `}>5L</button>
              </div>
              <div className={styles.container08}>
                <button className={` ${projectStyles.thqButton} ${styles.button05} `}>1R</button>
                <button className={` ${projectStyles.thqButton} ${styles.button06} `}>2R</button>
                <button className={` ${projectStyles.thqButton} ${styles.button07} `}>3R</button>
                <button className={` ${projectStyles.thqButton} ${styles.button08} `}>4R</button>
                <button className={` ${projectStyles.thqButton} ${styles.button09} `}>5R</button>
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
