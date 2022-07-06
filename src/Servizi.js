import { useState } from "react";
import Banner from "./components/Banner";
import CloseIcon from "@mui/icons-material/Close";

const Servizi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className=" w-screen h-full flex flex-col space-y-16 lg:space-y-20 xl:space-y-28 pb-14 ">
      <Banner />
      <section className="w-full relative space-y-10 lg:space-y-16 xl:flex xl:items-center xl:justify-around xl:space-y-0 xl:px-20">
        <div
          id="corso"
          className={
            !isOpen ? "flex flex-col space-y-4 mx-20 xl:w-[50%]" : "hidden"
          }
        >
          <img
            src="../images/cube.png"
            className="h-8 w-8 md:h-10 md:w-10 xl:w-14 xl:h-14"
          />
          <h3 className="font-oswald font-bold text-xl md:text-2xl xl:text-3xl">
            Consulenza Base
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
          <div className="flex flex-col items-center space-y-4 xl:pb-10 xl:absolute xl:-top-14 xl:left-0 xl:bg-white ">
            <h3 className="font-oswald font-bold text-xl xl:text-3xl">
              Consulenza Base
            </h3>
            <p className="font-space_mono text-md tracking-[-1px] font-semibold px-8 text-justify md:text-xl lg:text-2xl xl:px-12">
              Questo servizio e’ orientato alla conoscenza del mondo Crypto.
              Nello specifico, e’ dedicato a tutte le persone che si affacciano
              per la prima volta e che non possiedono alcuna esperienza in
              merito. Questa breve consulenza sara' utile nella scoperta in
              maniera generale di tutti i prodotti disponibili nel quale il
              nostro cliente avra’ la possibilita’ di intraprendere un percorso
              di investimento, come a partire dall’ apertura di un conto in
              Cryptovaluta, chiamato anche Crypto Wallet, fino ai diversi
              eco-sistemi Blockchain da utilizzare nel mondo delle
              Nfts(Non-fungible Token) e delle De-fi(sistema di finanza
              decentralizzata). Alla fine di questo consulenza il cliente
              acquisira’ una conoscenza notevole dei concetti chiave ed avra’ la
              possibilita di decidere se proseguire il percorso accompagnato e
              supportato dalla mia figura o proseguire da solo.
            </p>
            <CloseIcon
              onClick={() => setIsOpen(!isOpen)}
              fontSize="large"
              className="rounded-full shadow-md shadow-gray-500 bg-gray-200 hover:bg-orange-400 p-1 cursor-pointer"
            />
          </div>
        )}
        <div
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
            <h3 className="font-oswald font-bold text-xl xl:text-3xl">
              Gestione Portafoglio
            </h3>
            <p className="font-space_mono text-md tracking-[-1px] font-semibold px-8 text-justify md:text-xl lg:text-2xl xl:px-12  ">
              Qualora il cliente decidesse di investire nel mondo Crypto, avra’
              la possibilita di ususfruire del servizio di Gestione Portfolio ed
              Investimenti. Il cliente avra’ la possibilita’ di scegliere quale
              strategia di mercato utilizzare in base anche alle proprie
              esigenze ed a quelle del mercato, naturalmente supportato dalla
              mia experienza e conoscenza con l’obiettivo di ottenere maggiore
              successo nel percorso di investimento.
            </p>
            <CloseIcon
              onClick={() => setIsActive(!isActive)}
              fontSize="large"
              className="rounded-full shadow-md shadow-gray-500 bg-gray-200 hover:bg-orange-400 p-1 cursor-pointer"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Servizi;
