import React from 'react'
import { Link } from 'react-router-dom'

import Shock from '../components/shock'
import projectStyles from '../style.module.css'
import styles from './shock_training.module.css'

const ShockTraining = () => {
  return (
    <div className={styles.container}>
      <Link to="/set_up" className={styles.navlink}>
        <svg
          viewBox="0 0 1024 1024"
          className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon} `}
        >
          <title>arrow_back</title>
          <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
        </svg>
      </Link>
      <span className={styles.text}>Shock Therapy</span>
      <Shock />
    </div>
  )
}

export default ShockTraining
