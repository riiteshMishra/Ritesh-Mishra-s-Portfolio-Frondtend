import Information from "../Components/core/Contact/Information";
import ContactForm from "../Components/core/Contact/ContactForm";
import Footer from "../Components/core/Footer/Index";
import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
      document.title = "Ritesh | Mishra | contact";
    }, []);
  return (
    <section className="ContactPage">
      <div className="container">
        <div className="flex justify-evenly flex-col md:flex-row items-center md:items-start py-10 gap-8">
          <Information />
          <ContactForm />
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
