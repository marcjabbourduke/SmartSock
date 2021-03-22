import React from 'react'

import Helmet from 'react-helmet'

import ViewRec from '../components/view-rec'
import projectStyles from '../style.module.css'
import styles from './pressure_insole.module.css'

const PressureInsole = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Pressure_insole - SmartSock</title>
        <meta property="og:title" content="Pressure_insole - SmartSock" />
      </Helmet>
      <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon} `}>
        <title>arrow_back</title>
        <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
      </svg>
      <span className={styles.text}>Pressure Insole</span>
      <div className={styles.container1}>
        <button className={` ${projectStyles.thqButton} ${styles.button} `}>View Recordings</button>
        <button className={` ${projectStyles.thqButton} ${styles.button1} `}>
          Create New Recording
        </button>
      </div>
      <ViewRec></ViewRec>
    </div>
  )
}

export default PressureInsole
