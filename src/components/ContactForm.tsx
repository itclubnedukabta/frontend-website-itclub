import "../Tailwind.css";

interface ContactFormPropsInterface {}

const ContactForm = (props: ContactFormPropsInterface) => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <form action="" className="flex flex-col w-5/12">
        <h1 className="font-bold text-6xl">Contact Us</h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="px-3 rounded-md placeholder-white"
          style={{
            backgroundColor: "#0077B6",
          }}
        />
        <input type="email" placeholder="Email" name="email" />
        <textarea
          name="message"
          id=""
          cols={30}
          rows={10}
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="Send" className="w-2/12" />
      </form>
    </div>
  );
};

export default ContactForm;
