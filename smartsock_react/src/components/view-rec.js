import React from 'react'

import styles from './view-rec.module.css'

const ViewRec = () => {
  return (
    <div className={styles.viewrec}>
      <div className={styles.container}>
        <span className={styles.text}>
          <span className={styles.text1}>Recordings</span>
        </span>
      </div>
      <div className={styles.container1}></div>
    </div>
  )
}

export default ViewRec
