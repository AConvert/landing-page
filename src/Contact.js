import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import FacebookIcon from "@mui/icons-material/Facebook";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v1d50mu",
        "template_lyaanwq",
        form.current,
        "peLfaczaavFVqZHWQ"
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

        <div className="relative h-full p-6 md:p-8 bg-white bg-opacity-60 backdrop-blur-4xl font-oswald backdrop-filter shadow-md shadow-gray-300 rounded-lg px-6">
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
              className="mb-3 p-2 text-black shadow-sm shadow-gray-200 bg-white  rounded-lg focus:outline-none focus:bg-gray-100"
            />
            <input
              type="text"
              required
              placeholder="Cognome"
              name="user_surname"
              className="mb-3 p-2 text-black shadow-sm shadow-gray-200 bg-white  rounded-lg focus:outline-none focus:bg-gray-100"
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="user_email"
              className="mb-3 p-2 text-black shadow-sm shadow-gray-200 bg-white  rounded-lg focus:outline-none focus:bg-gray-100"
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="user_number"
              className="mb-3 p-2 text-black shadow-sm shadow-gray-200 bg-white  rounded-lg focus:outline-none focus:bg-gray-100"
            />
            <textarea
              className="mb-3 p-2 text-black shadow-sm shadow-gray-200 bg-white  rounded-lg focus:outline-none focus:bg-gray-100"
              name="message"
              placeholder="Scrivi messaggio..."
              cols="30"
              rows="4"
            ></textarea>

            <input
              onClick={() => setIsOpen(!isOpen)}
              className="mb-3 px-6 focus:outline-none p-2 rounded-md bg-orange-400 focus:bg-gray-200"
              type="submit"
              value="Richiedi Informazioni"
            />

            <div>
              <div
                className={
                  isOpen
                    ? "flex px-4 absolute z-100 -bottom-10 left-0 items-center justify-center py-3 space-x-2 bg-gradient-to-r font-bold from-white to-gray-200 font-space_mono text-sm lg:text-lg rounded-md"
                    : "hidden"
                }
              >
                <img
                  src="../images/email.png"
                  loading="lazy"
                  className="w-10 h-10"
                />
                <p>Richiesta mandata con successo</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center  pb-10 md:flex-row md:space-x-6 lg:space-x-14 lg:items-start bg-orange-400 md:justify-center md:items-center md:pb-10">
        <p className="font-space_mono font-semibold text-sm md:text-lg lg:text-xl">
          <span className="font-bold font-oswald text-md md:text-xl lg:text-2xl">
            Email:
          </span>
          frankieazzcrypto@gmail.com
        </p>
        <p className="font-space_mono font-semibold text-sm md:text-lg lg:text-xl">
          <span className="font-bold font-oswald text-md md:text-xl lg:text-2xl">
            Cellulare:
          </span>
          +393313612543
        </p>
      </div>
    </div>
  );
}

export default Contact;
