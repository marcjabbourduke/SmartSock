import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>SmartSock</title>
        <meta property="og:title" content="SmartSock" />
      </Helmet>
      <span className={styles.text}>SmartSock</span>
      <Link
        to="/set_up"
        className={` ${projectStyles.thqButton} ${projectStyles.thqLink} ${styles.button} `}
      >
        Log In
      </Link>
      <Link
        to="/set_up"
        className={` ${projectStyles.thqButton} ${projectStyles.thqLink} ${styles.button1} `}
      >
        Sign Up
      </Link>
    </div>
  )
}

export default Page
