import Information from "../Components/core/Contact/Information";
import ContactForm from "../Components/core/Contact/ContactForm";

const Contact = () => {
  return (
    <section className="ContactPage">
      <div className="container">
        <div className="flex justify-evenly flex-col md:flex-row items-center md:items-start py-10 gap-8">
          <Information />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
