import ContactUs from "./containers/ContactUs/ContactUs";
import OurServiceArea from "./containers/OurServiceArea/OurServiceArea";

export default function Home() {
  return (
    <div className='container'>
      <ContactUs />
      <OurServiceArea />
    </div>
  );
}
