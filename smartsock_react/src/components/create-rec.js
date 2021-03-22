import React from 'react'

import projectStyles from '../style.module.css'
import styles from './create-rec.module.css'

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
          <span className={styles.text4}>Recording View Here</span>
        </div>
      </div>
    </div>
  )
}

export default CreateRec
