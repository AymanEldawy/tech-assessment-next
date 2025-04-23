import { SERVICES_LOCATIONS } from "../../../data/DUMMY_DATA";
import ServiceMapBox from "../../components/shared/map/MapBox/ServiceMapBox"
import SectionWrapper from "../../components/shared/wrapper/SectionWrapper";
import styles from './OurServiceArea.module.scss';

const OurServiceArea = () => {
  return (
    <SectionWrapper>
      <div className={styles.services}>
        <div className={styles.services_content_overlay}>
          <h2>Our Service Area</h2>
          <p>CJ Brubacher Ltd. is your trusted neighbour <br /> for over <strong>100 years of experience.</strong></p>
        </div>
        <ServiceMapBox zoom={9.5} hasCustomMarker locations={SERVICES_LOCATIONS} />
      </div>
    </SectionWrapper>
  )
}

export default OurServiceArea