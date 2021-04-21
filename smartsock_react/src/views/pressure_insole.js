import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import ViewRec from '../components/view-rec'
import CreateRecording from '../components/create-recording'
import PressureView from '../components/pressure-view'
import projectStyles from '../style.module.css'
import styles from './pressure_insole.module.css'

const PressureInsole = () => {
  const [viewRec, setViewRec] = useState(false)
  const [createRec, setCreateRec] = useState(false)

  const showViewRec = () => {setViewRec(true); setCreateRec(false)}
  const showCreateRec = () => {setViewRec(false); setCreateRec(true)}
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
      <span className={styles.text}>Pressure Insole</span>
      <div className={styles.container1}>
        <button className={` ${projectStyles.thqButton} ${styles.button} `} onClick={showViewRec}>View Recordings</button>
        <button className={` ${projectStyles.thqButton} ${styles.button1} `} onClick={showCreateRec}>
          Create New Recording
        </button>
      </div>
        {viewRec ? <ViewRec /> : null}
        {createRec ? <CreateRecording /> : null} 
    </div>
  )
}

export default PressureInsole
