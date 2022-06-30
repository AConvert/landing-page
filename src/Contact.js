import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

function Contact() {
  AOS.init();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xvdje3l",
        "template_bvnrrwu",
        form.current,
        "FsP5p1a9ZotVFDGpI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div id="contatti" className="w-screen h-full mt-4 md:mt-10 ">
      <div className="flex md:flex md:flex-row md:justify-center md:px-12 lg:px-20 md:items-center md:space-x-10 flex-col items-center text-center space-y-12 bg-gradient-to-b from-white to-orange-400 pb-16">
        <div className="flex flex-col items-center space-y-8">
          <img
            src="../images/Contact_img2.png"
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] font-space_mono pt-10"
          />
          <div className="flex items-center justify-center">
            <p className="font-space_mono text-lg lg:text-2xl font-bold text-center px-6 xl:px-32">
              Chiedi{" "}
              <span className="text-oswald lg:text-2xl ">INFORMAZONI</span> per
              iniziare il tuo{" "}
              <span className="text-orange-600 text-oswald">
                <Typewriter
                  words={["PERCORSO"]}
                  typeSpeed={120}
                  cursor={true}
                  deleteSpeed={200}
                  cursorStyle="_"
                  onLoopDone={handleDone}
                />
              </span>
            </p>
          </div>
        </div>

        <div className="h-full p-6 md:p-8 bg-white backdrop-blur-4xl font-oswald backdrop-filter shadow-lg shadow-gray-400 rounded-lg px-6">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col md:text-xl lg:text-2xl"
          >
            <input
              type="text"
              required
              placeholder="Nome"
              name="user_name"
              className="mb-3 p-2 text-black border-b-2 border-b-orange-600 focus:outline-none focus:bg-gray-100"
            />
            <input
              type="text"
              required
              placeholder="Cognome"
              name="user_surname"
              className="mb-3 p-2 text-black border-b-2 border-b-orange-600 focus:outline-none focus:bg-gray-100"
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="user_email"
              className="mb-3 p-2 text-black border-b-2 border-b-orange-600 focus:outline-none focus:bg-gray-100"
            />
            <textarea
              className="mb-3 p-2 text-black border-b-2 border-b-orange-600 focus:outline-none focus:bg-gray-100"
              name="message"
              placeholder="Scrivi messaggio..."
              cols="30"
              rows="5"
            ></textarea>
            {/* <button
              onClick={() => setIsSubmitted(!isSubmitted)}
              className="mb-3 px-6 hover:bg-orange-600 focus:outline-none p-2 rounded-md bg-orange-400 focus:bg-gray-200"
              type="submit"
            >
              Richiedi Informazioni
            </button> */}
            <input
              className="mb-3 px-6 hover:bg-orange-600 focus:outline-none p-2 rounded-md bg-orange-400 focus:bg-gray-200"
              type="submit"
              value="Richiedi Informazioni"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
