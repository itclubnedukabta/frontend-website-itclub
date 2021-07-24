import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";

class ContactUS extends React.Component {
  render() {
    return (
      <div
        className={`h-screen lg:h-screen lg:w-screen lg:pt-0 md:pt-36 pl-0 lg:pl-16`}
      >
        <Helmet>
          <title>Contact Us | IT Club Nedukabta</title>
        </Helmet>
        <ContactForm />
      </div>
    );
  }
}

export default ContactUS;
