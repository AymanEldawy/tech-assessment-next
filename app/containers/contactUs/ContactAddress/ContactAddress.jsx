import React from 'react'
import styles from './ContactAddress.module.scss'

const ADDRESS_INFO = [
  { title: 'Address', description: '19 First St East, Elmira, ON N3B 2E6' },
  { title: 'Phone', description: '(519) 669-3362' },
  { title: 'Email', description: 'admin@cjbrubacher.com' },
  {
    title: 'Operation Hours',
    description: `Monday - Thursday: 7:30 AM–5:30 PM Friday: 8 AM–3 PM Saturday & Sunday: Closed`
  },
]

const AddressDescription = ({ title, description }) => (
  <div className={styles.address_card}>
    <h3 className={styles.address_card_title}><span>{title}</span></h3>
    <p>{description}</p>
  </div>
)

const ContactAddress = () => {
  return (
    <div className={styles.address}>
      <div className={styles.address_content}>
        {ADDRESS_INFO?.map(address => (
          <AddressDescription key={address.title} {...address} />
        ))}
      </div>
    </div>
  )
}

export default ContactAddress