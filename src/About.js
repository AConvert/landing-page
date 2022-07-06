import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const About = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

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
      className="pt-20 pb-20  xl:pb-14 w-screen  md:mt-20 lg:mt-24 xl:mt-36 xl:flex xl:justify-center xl:items-center"
    >
      <div className=" flex justify-center items-center space-x-6 pb-10 md:space-x-24 md:pb-20 xl:space-x-10 xl:px-12">
        <div className="flex flex-col space-y-4 md:space-y-6 ">
          {icons.map(({ url, id, name }) => (
            <div className=" flex flex-col space-y-1 items-center justify-center">
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
            src="../images/new_foto_2.png"
            className="h-[300px] w-60 md:h-[440px] md:w-80 lg:h-[510px] lg:w-[450px]  absolute z-20 bottom-0 right-0"
          />
        </div>
      </div>

      <div className="flex flex-col items-center  space-y-4 md:space-y-6 relative">
        <p className="text-sm font-space_mono text-justify font-semibold text-black tracking-tighter px-8 pb-2 md:text-lg md:px-14 lg:text-2xl">
          Sono Francesco Savignano, consulente ed investitore in Crypto valute.
          Tutto ha avuto inizio 5 anni fa in Manchester nel Regno Unito, la mia
          città natale, dove ho conosciuto per la prima volta il concetto di
          Crypto valuta e sin da subito il mio interesse è aumentato
          gradualmente portandomi a frequentare e conseguire diversi attestati e
          certificazioni specifiche...
        </p>

        <div
          onClick={handleModal}
          className={
            !openModal
              ? "py-2 px-3 rounded-3xl bg-orange-400 flex w-28 items-center justify-center space-x-4 cursor-pointer hover:bg-black hover:text-white"
              : "hidden"
          }
        >
          <button className="font-oswald font-bold text-md">Scopri</button>
          <img
            src="../images/arrow-right.png"
            className="w-5 h-5 bg-white rounded-full"
          />
        </div>
        {openModal && (
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-lg w-full h-full inline-block font-space_mono text-justify tracking-[-1px] font-semibold text-black  px-8 md:px-14 bg-white pb-4 lg:text-2xl">
              Inoltre, spinto dalla voglia di alimentare la mia conoscenza, ho
              avuto la possibilità di lavorare e collaborare con dei consulenti
              finanziari nel mondo Crypto che hanno ampliato la mia esperienza.
              Da quando 5 anni fa, ho iniziato il mio percorso ad oggi , tante
              cose sono cambiate ed il mondo della Crypto si è gradualmente
              evoluto, perciò ho cercato di espandere la mia conoscenza su più
              fronti cercando di restare sempre attuale ma andando sempre alla
              ricerca di nuove tecnologie. Nello specifico, l’esperienza
              acquisita negli anni mi permette di offrire servizi di consulenza
              in alcuni campi noti come NFT(arte digitale tokenizzato sul
              blockchain), De-Fi(finanza decentralizzata), videogiochi P2E e per
              concludere il METAVERSO. Queste tecnologie fanno tutte parte del
              nuovo Web3.
            </p>

            <CloseIcon
              onClick={handleModal}
              fontSize="large"
              className="rounded-full shadow-md shadow-gray-500 bg-gray-200 hover:bg-orange-400 p-1 cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
