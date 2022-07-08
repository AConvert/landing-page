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
      className="relative pt-20 pb-20 lg:pb-0  xl:pb-14 w-screen  md:mt-20 lg:mt-24 xl:mt-36 xl:flex xl:justify-center xl:items-center"
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

        <div className="">
          <div className="rounded-full w-64 h-64 md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] bg-gradient-to-tr from-gray-200 to-orange-400 blur-lg"></div>
          <img
            src="../images/foto_3-bg.png"
            className="h-[320px] w-[320px] top-3 -right-3 md:h-[460px] md:w-[460px] lg:h-[560px] lg:w-[560px] lg:right-20 xl:w-[600px] xl:left-36 absolute z-1000 md:-top-6 md:right-10"
          />
        </div>
      </div>

      <div className="flex flex-col items-center  space-y-4 md:space-y-6">
        <p className="text-sm font-space_mono font-semibold text-black text-justify tracking-[-1px] xl:tracking-[-3px]  px-8 pb-2 md:text-lg md:px-14 lg:text-2xl xl:px-16">
          Sono Francesco Savignano, consulente ed investitore in Crypto valute.
          Tutto ha avuto inizio 5 anni fa a Manchester nel Regno Unito, la mia
          città natale, dove mi sono avvicinato per la prima volta al mondo
          Crypto. All'inizio, essendo una cosa nuova, non è facile apprenderne
          subito i concetti, ma il mio interesse, grazie al supporto dei miei
          consulenti, cresceva gradualmente...
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
          <div className="flex flex-col w-screen absolute z-100 bg-white left-0 top-0 items-center space-y-4 md:space-y-6 font-space_mono text-sm text-justify tracking-[-1px] md:text-lg h-full  xl:tracking-[-3px] font-semibold text-black  px-8 md:px-14 pb-4 lg:text-2xl xl:px-16">
            <p>
              Durante il mio percorso, lungo ed intenso, ho conseguito diversi
              attestati e certificazioni specifiche nella Blockchain e Crypto
              Investment, che mi permettono oggi di avere una conoscenza a 360°.
              Il mondo delle criptomonete è in continua evoluzione, e per avere
              una conoscenza chiara e completa, si necessita di una grande
              quantità di tempo ed energia. La mia parola d'ordine infatti è
              proprio "aggiornamento".
            </p>
            <p className="font-bold text-lg md:text-2xl lg:text-2xl xl:text-3xl text-orange-400">
              Hai bisogno di consulenza nei seguenti campi del nuovo web3?
            </p>
            <div className="space-y-1 md:space-y-3">
              <p>-NFT(arte digitale tokenizzato sul blockchain)</p>
              <p>-De-Fi(finanza decentralizzata)</p>
              <p>-Videogiochi P2E</p>
              <p>-METAVERSO</p>
            </div>
            <p className="text-lg md:text-2xl lg:text-2xl xl:text-3xl text-orange-400">
              Posso aiutarti io!!! Condivido la mia conoscenza e competenza con
              te per aiutarti a raggiungere i tuoi obiettivi
            </p>

            <CloseIcon
              onClick={handleModal}
              fontSize="large"
              className="rounded-full shadow-md shadow-gray-500 bg-gray-200 hover:bg-orange-400 p-1 cursor-pointer xl:tracking-[-3px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
