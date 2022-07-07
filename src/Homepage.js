import Header from "./components/Header";

function Homepage() {
  return (
    <div className="relative w-screen min-h-[500px] md:min-h-[600px] xl:min-h-screen  bg-gradient-to-r from-gray-50  to-gray-300 pb-40">
      <Header />
      <div className="md:flex md:items-center ">
        <div className="w-full h-full flex flex-col justify-center pl-14 pt-10 pr-10 space-y-12 md:pt-0 md:space-y-10 md:pl-16 md:pr-0 xl:pt-0 xl:pl-40 xl:pb-24 md:pb-52">
          <h1 className=" font-space_mono text-2xl md:text-4xl xl:text-6xl text-black font-bold">
            Investi nel tuo futuro con successo.
          </h1>
          <a
            href="#contatti"
            class="relative inline-flex items-center justify-center px-4 md:px-8 py-2 md:py-4 font-oswald overflow-hidden w-28 md:w-44 text-sm md:text-xl xl:text-2xl text-black transition duration-300 ease-out border-2 border-orange-500 rounded-lg shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
              Contattaci
            </span>
            <span class="relative invisible">Contattaci</span>
          </a>
        </div>

        <div className="w-full flex justify-center md:pr-20 md:pt-14 xl:pt-24 ">
          <img
            src="../images/foto_4-bg.png"
            className=" h-[340px] w-72 md:h-[450px] md:w-[400px] lg:w-[500px] lg:h-[480px] xl:h-[540px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]"
          />
        </div>
        <div className="flex p-1 space-x-1 items-center shadow-sm shadow-black rounded-lg absolute z-100 top-[380px] left-10 bg-white md:absolute md:z-100 md:top-64 md:left-[370px] lg:top-[320px] lg:left-[530px] xl:top-80 xl:left-[780px] 2xl:left-[900px] xl:p-3">
          <div className=" border-b-2 xl:flex xl:flex-col xl:space-y-1 xl:border-b-4 border-b-orange-600">
            <h2 className="font-space_mono text-[10px] pt-[2px] md:text-sm">
              Stats
            </h2>
            <p className="font-space_mono font-bold text-[10px] md:text-sm xl:text-md">
              +2.4%
            </p>
          </div>
          <div className="xl:flex xl:flex-col xl:space-y-1">
            <p className="font-space_mono text-[10px] md:text-sm">2022</p>
            <p className="font-space_mono font-bold text-[10px] md:text-sm xl:text-md">
              $1200
            </p>
          </div>
        </div>

        <div className="w-full h-48 bg-white absolute -bottom-6 left-0 md:h-[180px] xl:w-full xl:h-48 xl:bg-white xl:absolute xl:-bottom-8 xl:left-0  "></div>
        <div className="bg-white w-32 h-32 border-2  md:w-48 md:h-48 lg:w-60 lg:h-60 flex border-b-4 xl:border-b-8 text-center border-b-orange-600 absolute z-1000 bottom-16 left-10 md:absolute md:z-100 md:bottom-4 md:left-[102px] xl:-bottom-8 xl:left-[260px] 2xl:w-72 2xl:h-72">
          <div className="w-8 md:w-40 md:h-20 h-8 space-y-2 bg-white">
            <img src="../images/crypto_icon.png" className="m-2 xl:m-4" />
            <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl w-36 md:w-44 xl:w-60 2xl:w-80 2xl:pt-4 font-oswald  font-bold pr-6 pl-1 md:pl-8 xl:pr-12">
              Servizi di consulenza in cryptovaluta.
            </h3>
          </div>
        </div>
        <div className="bg-white w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 border-2 border-gray-300 border-b-4 xl:border-b-8 text-center border-b-orange-600 absolute z-1000 bottom-16 right-10 md:bottom-4 md:right-[102px] xl:-bottom-8 xl:right-[260px] 2xl:w-72 2xl:h-72">
          <div className="w-8 h-8 md:w-40 md:h-40 space-y-2">
            <img src="../images/portfolio_icon.png" className="m-2 xl:m-4" />
            <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl xl:w-60 w-36 md:w-48 2xl:w-80 2xl:pt-4 2xl:text-3xl 2xl:pr-16 font-oswald font-bold pr-[20px] text-center md:pl-3 xl:pl-4">
              Servizi di gestione portafoglio ed investimenti.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
