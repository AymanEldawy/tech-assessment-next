import React from 'react'
import styles from './SectionWrapper.module.scss';

const SectionWrapper = ({ children }) => {
  return (
    <section className={styles.section_wrapper}>
      {children}
    </section>
  )
}

export default SectionWrapper