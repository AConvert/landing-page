// import AOS from "aos";
// import "aos/dist/aos.css";
import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  // AOS.init();

  const icons = [
    {
      url: "../images/mission.png",
      id: "bfa08bd2-eaef-11ec-8fea-0242ac120002",
      name: "MISSION",
    },
    {
      url: "../images/vision.png",
      id: "e47a19f0-eaef-11ec-8fea-0242ac120002",
      name: "VISION",
    },
    {
      url: "../images/goal.png",
      id: "f92c3888-eaef-11ec-8fea-0242ac120002",
      name: "GOALS",
    },
  ];

  return (
    <div
      id="storia"
      className="pt-20 pb-20  w-screen  md:mt-20 lg:mt-24 xl:mt-36 xl:flex xl:justify-center xl:items-center"
    >
      <div className=" flex justify-center items-center space-x-6 pb-10 md:space-x-24 md:pb-20 xl:space-x-10 xl:px-12">
        <div className="flex flex-col space-y-4 md:space-y-6 ">
          {icons.map(({ url, id, name }) => (
            <div
              // data-aos="fade-right"
              // data-aos-delay="200"
              className=" flex flex-col space-y-1 items-center justify-center"
            >
              <img
                src={url}
                Key={id}
                className="h-8 w-8 md:h-16 md:w-16 lg:w-20 lg:h-20 xl:w-16 xl:h-16"
              />
              <p className="text-sm md:text-lg lg:text-2xl xl:text-xl font-oswald font-bold text-orange-600">
                {name}
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="rounded-full w-64 h-64 md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] bg-gradient-to-tr from-gray-200 to-orange-400 blur-lg"></div>
          <img
            src="../images/about_img.png"
            className="h-[340px] w-44 md:h-[440px] md:w-64 lg:h-[510px] lg:w-80  absolute z-20 bottom-0 right-0"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto space-y-4 md:space-y-6 relative">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-space_mono font-bold text-black">
          La mia Storia
        </h1>
        <p className="text-sm font-space_mono text-center font-semibold text-black px-4 pb-2 md:text-lg md:px-14 lg:text-2xl">
          Sono Francesco Savignano, consulente ed investitore in Crypto valute.
          Tutto ha avuto inizio 5 anni fa in Manchester nel Regno Unito, la mia
          città natale, dove ho conosciuto per la prima volta il concetto di
          Crypto valuta e sin da subito il mio interesse è aumentato
          gradualmente portandomi a frequentare e conseguire diversi attestati e
          certificazioni specifiche...
        </p>

        <motion.div
          layout
          transition={{ layout: { duration: 0.7, type: "spring" } }}
          onClick={handleModal}
          className="px-4"
        >
          <motion.a>
            <a
              href="#_"
              class={
                !openModal
                  ? "relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                  : "hidden"
              }
            >
              <span class="w-full h-full bg-gradient-to-br from-gray-200 to-orange-400 group-hover:from-gray-200 group-hover:to-orange-400 absolute"></span>
              <span class="relative px-4 py-2 md:px-6 md:py-3 transition-all ease-out bg-gray-200 rounded-md group-hover:bg-opacity-0 duration-400">
                <span class="relative text-black">Scorpi di piu...</span>
              </span>
            </a>
          </motion.a>
          {openModal && (
            <motion.div className="flex flex-col items-center">
              <p className="text-sm md:text-lg w-full h-full inline-block font-space_mono text-center font-semibold text-black  px-4 md:px-10 bg-white pb-4 lg:text-2xl">
                Inoltre, spinto dalla voglia di alimentare la mia conoscenza, ho
                avuto la possibilità di lavorare e collaborare con dei
                consulenti finanziari nel mondo Crypto che hanno ampliato la mia
                esperienza. Da quando 5 anni fa, ho iniziato il mio percorso ad
                oggi , tante cose sono cambiate ed il mondo della Crypto si è
                gradualmente evoluto, perciò ho cercato di espandere la mia
                conoscenza su più fronti cercando di restare sempre attuale ma
                andando sempre alla ricerca di nuove tecnologie. Nello
                specifico, l’esperienza acquisita negli anni mi permette di
                offrire servizi di consulenza in alcuni campi noti come NFT(arte
                digitale tokenizzato sul blockchain), De-Fi(finanza
                decentralizzata), videogiochi P2E e per concludere il METAVERSO.
                Queste tecnologie fanno tutte parte del nuovo Web3.
              </p>
              <button
                onClick={handleModal}
                className=" text-sm md:text-lg lg:text-2xl border-4 font-space_mono font-bold border-b-orange-600 mx-auto bg-gray-200 py-2 px-3 md:py-4 md:px-6 border-t-transparent hover:bg-white"
              >
                Close
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
