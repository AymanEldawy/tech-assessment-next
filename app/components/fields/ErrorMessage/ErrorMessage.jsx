import React from 'react'
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ text }) => {
  if (!text) return

  return (
    <p className={styles.error_message}>{text}</p>
  )
}

export default ErrorMessage