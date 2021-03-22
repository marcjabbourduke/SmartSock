import React from 'react'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './shock_training.module.css'

const ShockTraining = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Shock_training - SmartSock</title>
        <meta property="og:title" content="Shock_training - SmartSock" />
      </Helmet>
      <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon} `}>
        <title>arrow_back</title>
        <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
      </svg>
      <span className={styles.text}>Shock Therapy</span>
    </div>
  )
}

export default ShockTraining
