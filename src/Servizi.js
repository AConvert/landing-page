import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";

const Servizi = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="relative w-screen h-full flex flex-col space-y-16 lg:space-y-20 xl:space-y-28 pb-14 xl:mb-52">
      <Banner />
      <section
        data-aos="fade-right"
        data-aos-delay="200"
        className="w-full relative space-y-10 lg:space-y-16 xl:flex xl:items-center xl:justify-around xl:space-y-0 xl:px-20"
      >
        <div
          id="corso"
          className={
            !isOpen ? "flex flex-col space-y-4 mx-20 xl:w-[50%] " : "hidden"
          }
        >
          <img
            src="../images/notebook.png"
            className="h-12 w-12 md:h-16 md:w-16 xl:w-24 xl:h-24"
          />
          <h3 className="font-oswald font-bold text-xl md:text-2xl xl:text-3xl">
            Consulenza Crypto
          </h3>
          <p className="font-space_mono text-sm font-semibold md:text-md xl:text-xl">
            Consulenza riservata a chi si affacia al mondo Crypto per la prima
            volta.
          </p>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="py-2 md:py-3 md:px-4 px-3 xl:py-4 xl:px-7 rounded-3xl bg-orange-400 flex w-28 xl:w-32 items-center justify-center space-x-4 cursor-pointer hover:bg-black hover:text-white"
          >
            <button className="font-oswald font-bold text-md xl:text-xl">
              Scopri
            </button>
            <img
              src="../images/arrow-right.png"
              className="w-5 h-5 md:w-6 md:h-6 xl:h-8 xl:w-8 bg-white rounded-full"
            />
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center space-y-4 xl:pb-10 xl:absolute xl:-top-24 xl:left-0 xl:bg-white xl:mb-24">
            <h3 className="font-oswald font-bold text-xl xl:text-3xl">
              Consulenza Crypto
            </h3>
            <div className="font-space_mono space-y-4 text-md tracking-[-1px] font-semibold px-8 text-justify md:text-xl lg:text-2xl xl:px-12">
              <p className="tetx-lg md:text-2xl lg:text-2xl xl:text-3xl  text-orange-400">
                Non hai abbastanza esperienza oppure è la prima volta che ti
                affacci al mondo crypto? Chiedi la nostra consulenza:
              </p>
              <div className="space-y-2 md:px-20 xl:px-32">
                <p>
                  -Scoprirai in maniera generale tutti i prodotti disponibili
                </p>
                <p>-Imparerai come accreditarti presso un exchange</p>
                <p>
                  -Apprenderai come creare un wallet sicuro e adatto alle tue
                  esigenze
                </p>
              </div>
              <p>
                Durante il percorso di consulenza acquisirai la giusta
                conoscenza dei concetti chiave per essere sicuro di investire al
                meglio il tuo denaro!
              </p>
            </div>
            <CloseIcon
              onClick={() => setIsOpen(!isOpen)}
              fontSize="large"
              className="rounded-full shadow-md shadow-gray-500 bg-gray-200 hover:bg-orange-400 p-1 cursor-pointer"
            />
          </div>
        )}
        {/* <div
          id="gestione"
          className={
            !isActive ? "flex flex-col space-y-4 mx-20 xl:w-[50%]" : "hidden"
          }
        >
          <img
            src="../images/hexagon.png"
            className="h-8 w-8 md:h-10 md:w-10 xl:h-14 xl:w-14"
          />
          <h3 className="font-oswald font-bold text-xl md:text-2xl xl:text-3xl">
            Gestione Portafoglio
          </h3>
          <p className="font-space_mono text-sm font-semibold md:text-md xl:text-xl">
            Servizio mirato alla gestione portafoglio del cliente.
          </p>
          <div
            onClick={() => setIsActive(!isActive)}
            className="py-2 px-3 md:py-3 md:px-4 xl:py-4  rounded-3xl bg-orange-400 flex w-28 xl:w-32 items-center justify-center space-x-4 cursor-pointer hover:bg-black hover:text-white"
          >
            <button className="font-oswald font-bold text-md xl:text-xl">
              Scopri
            </button>
            <img
              src="../images/arrow-right.png"
              className="w-5 h-5 xl:h-8 xl:w-8 bg-white rounded-full"
            />
          </div>
        </div>
        {isActive && (
          <div className="flex flex-col items-center space-y-4 xl:pb-10 xl:absolute xl:top-0 xl:left-0 xl:bg-white ">
            <h3 className="font-oswald font-bold text-xl xl:text-3xl pb-4">
              Gestione Portafoglio
            </h3>
            <div className="space-y-4 font-space_mono text-md tracking-[-2px] font-semibold px-8 text-justify md:text-xl lg:text-2xl xl:px-12 xl:pb-10 ">
              <p className="tetx-lg md:text-2xl lg:text-2xl xl:text-3xl  text-orange-400">
                Hai investito e hai bisogno di supporto nella gestione del tuo
                portfolio?
              </p>
              <p>
                Ti offriamo un supporto professionale, in base alle tue esigenze
                e quelle del mercato, per gestire al meglio il tuo portfolio e
                ottenere i migliori risultati.
              </p>
            </div>
            <CloseIcon
              onClick={() => setIsActive(!isActive)}
              fontSize="large"
              className="rounded-full shadow-md shadow-gray-500 bg-gray-200 hover:bg-orange-400 p-1 cursor-pointer"
            />
          </div>
        )} */}
      </section>
    </div>
  );
};

export default Servizi;
