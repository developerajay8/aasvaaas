import Navbar from "./component/navbar";
import Herosection from "./component/hero-section";
import Solving from "./component/solving";
import Workwithus from "./component/workwithus";
import Footer from "./component/footer";
import ContactForm from "./component/contact-from";
import Casestudies from "./component/casestudies";
import Ourtechstack from "./component/ourtech-stack";
import Ourjourney from "./component/ourjourney";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Herosection/>
      <Ourjourney/>
      <Solving/>
      <Ourtechstack/>
      <Workwithus/>
      <Casestudies/>
      {/* <ContactForm/> */}
      <Footer/>
    </div>
  );
}
