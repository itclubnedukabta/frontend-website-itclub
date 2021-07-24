import "../Tailwind.css";

interface ContactFormPropsInterface {}

const ContactForm = (props: ContactFormPropsInterface) => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <form action="" className="flex flex-col w-9/12 xl:w-5/12 ml-12">
        <h1
          className="font-bold text-5xl sm:text-6xl my-1"
          style={{
            color: "#0077B6",
          }}
        >
          Contact Us
        </h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="px-3 rounded-md placeholder-white my-1"
          style={{
            backgroundColor: "#0077B6",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 rounded-md placeholder-white my-1"
          style={{
            backgroundColor: "#0077B6",
          }}
        />
        <textarea
          name="message"
          id=""
          cols={30}
          rows={10}
          placeholder="Your Message"
          className="px-3 rounded-md placeholder-white my-1"
          style={{
            backgroundColor: "#0077B6",
          }}
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="text-white rounded-md w-3/12 md:w-1/12 my-1"
          style={{
            backgroundColor: "#0077B6",
          }}
        />
      </form>
    </div>
  );
};

export default ContactForm;
