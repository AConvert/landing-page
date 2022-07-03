import { useState } from "react";
import Banner from "./components/Banner";
import CloseIcon from "@mui/icons-material/Close";

const Servizi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className=" w-screen h-full flex flex-col space-y-10 xl:space-y-28 pb-14 ">
      <Banner />

      <div className="w-full flex flex-col space-y-10 xl:space-y-20 pt-6">
        <div
          id="corso"
          className="flex flex-col items-center mx-auto shadow-md  shadow-gray-400 rounded-lg md:flex md:flex-row md:shadow-none md:space-x-12 xl:space-x-32 "
        >
          <img
            src="../images/corso_base.jpg"
            className="w-auto object-cover h-40 rounded-t-lg md:h-64 md:rounded-lg md:w-72 shadow-lg shadow-gray-600 xl:w-80 xl:h-72"
          />
          <div className="flex flex-col items-center text-lg font-oswald  space-y-4 py-6 md:flex md:flex-col md:items-start md:space-y-3 xl:space-y-6">
            <p className="font-bold font-space_mono md:text-xl lg:text-2xl xl:text-3xl">
              Corso Base
            </p>
            <p className="hidden md:inline-block font-oswald text-sm text-gray-600 lg:text-lg xl:text-xl">
              Corso riservato a chi si affacia al mondo Crypto per la prima
              volta
            </p>
            <div onClick={() => setIsOpen(!isOpen)}>
              <a
                href="#_"
                class="relative inline-block px-3 py-1 md:px-4 md:py-2 xl:px-6 xl:py-3 font-medium group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded-lg bg-gray-400 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white rounded-lg  group-hover:bg-orange-400"></span>
                <span class="relative text-md md:text-xl xl:text-2xl text-black group-hover:text-black">
                  Info
                </span>
              </a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="flex flex-col items-center space-y-4 xl:pb-10">
            <p className="font-space_mono text-md font-semibold px-6 text-center md:text-xl lg:text-2xl xl:px-12">
              Questo servizio e’ orientato alla conoscenza del mondo Crypto.
              Nello specifico, e’ dedicato a tutte le persone che si affacciano
              per la prima volta e che non possiedono alcuna esperienza in
              merito. Questo breve corso sara' utile nella scoperta in maniera
              generale di tutti i prodotti disponibili nel quale il nostro
              cliente avra’ la possibilita’ di intraprendere un percorso di
              investimento, come a partire dall’ apertura di un conto in
              Cryptovaluta, chiamato anche Crypto Wallet, fino ai diversi
              eco-sistemi Blockchain da utilizzare nel mondo delle
              Nfts(Non-fungible Token) e delle De-fi(sistema di finanza
              decentralizzata). Alla fine di questo Corso il cliente acquisira’
              una conoscenza notevole dei concetti chiave ed avra’ la
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
          className="flex flex-col items-center mx-auto shadow-md shadow-gray-400 rounded-lg md:flex md:flex-row md:shadow-none md:space-x-12 xl:space-x-32 mb-32"
        >
          <img
            src="../images/gestione_portfolio.jpg"
            className="w-auto object-cover h-40 rounded-t-lg md:h-64 md:rounded-lg md:w-72 xl:w-80 xl:h-72 shadow-lg shadow-gray-600"
          />
          <div className="flex flex-col items-center text-lg font-oswald  space-y-4 py-6 md:flex md:flex-col md:items-start md:space-y-3 xl:space-y-6">
            <p className="font-bold font-space_mono md:text-xl lg:text-2xl xl:text-3xl lg:mr-6">
              Gestione Portafoglio
            </p>
            <p className="hidden md:inline-block font-oswald text-sm text-gray-600 pr-20 lg:text-lg lg:mr-6 xl:text-xl">
              Servizio mirato alla gestione portafoglio del cliente
            </p>
            <div onClick={() => setIsActive(!isActive)}>
              <a
                href="#_"
                class="relative inline-block px-3 py-1 md:px-4 md:py-2 xl:px-6 xl:py-3 font-medium group lg:mr-6"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded-lg bg-gray-400 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white rounded-lg  group-hover:bg-orange-400"></span>
                <span class="relative text-md md:text-xl xl:text-2xl text-black group-hover:text-black">
                  Info
                </span>
              </a>
            </div>
          </div>
        </div>

        {isActive && (
          <div className="flex flex-col items-center space-y-4 xl:pb-10">
            <p className="font-space_mono text-md md:text-xl font-semibold px-8 text-center lg:text-2xl xl:px-12">
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
      </div>
    </div>
  );
};

export default Servizi;
