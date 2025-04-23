import React from 'react'
import ContactAddress from './ContactAddress/ContactAddress'
import ContactForm from './ContactForm/ContactForm'
import styles from './Contact.module.scss';
import ServiceMapBox from '../../components/maps/MapBox/ServiceMapBox';
import { CONTACT_LOCATIONS } from '../../../data/DUMMY_DATA';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

const Contact = () => {
  return (
    <SectionWrapper>
      <div className={styles.contact}>
        <div className={styles.contact_map}>
          <div className={styles.overlay}>
            <ServiceMapBox center={[-80.6964, 43.550]} locations={CONTACT_LOCATIONS} markerClassName="contact_marker" />
          </div>
          <ContactAddress />
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  )
}

export default Contact