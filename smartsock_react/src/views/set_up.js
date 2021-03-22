import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './set_up.module.css'

const SetUp = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Set_up - SmartSock</title>
        <meta property="og:title" content="Set_up - SmartSock" />
      </Helmet>
      <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon} `}>
        <title>home</title>
        <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
      </svg>
      <button className={` ${projectStyles.thqButton} ${styles.button} `}>Pair New Device</button>
      <Link
        to="/shock_training"
        className={` ${projectStyles.thqButton} ${projectStyles.thqLink} ${styles.button1} `}
      >
        Shock Training
      </Link>
      <Link
        to="/pressure_insole"
        className={` ${projectStyles.thqButton} ${projectStyles.thqLink} ${styles.button2} `}
      >
        Pressure Insole
      </Link>
      <button className={` ${projectStyles.thqButton} ${styles.button3} `}>
        Consolidated Data View
      </button>
    </div>
  )
}

export default SetUp
