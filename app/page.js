import ContactUs from "./containers/contactUs/ContactUs";
import OurServiceArea from "./containers/serviceArea/OurServiceArea";

export default function Home() {
  return (
    <div className='container'>
      <ContactUs />
      <OurServiceArea />
    </div>
  );
}
