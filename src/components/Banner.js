import React from "react";

const Banner = () => {
  return (
    <div>
      {" "}
      <div className="w-full h-full flex justify-center md:mt-20 relative">
        <div className=" w-72 h-72 rounded-full border-8 bg-gradient-to-r from-gray-200 via-blue-500 to-green-400 md:w-96 md:h-96 xl:mr-32 xl:w-[420px] xl:h-[420px]"></div>
        <div className="absolute w-52 h-52 rounded-full bg-white top-10 md:w-72 md:h-72 md:top-12 xl:left-[193px] xl:w-[330px] xl:h-[330px] xl:top-11 2xl:left-[372px]"></div>
        <div>
          <div className="hidden xl:flex xl:flex-col xl:space-y-4 xl:items-start w-96 xl:w-[550px] pt-20 pl-20">
            <h1 className="font-bold font-space_mono text-2xl">
              La <span className="text-orange-400 text-4xl">SOLUZIONE</span>{" "}
              ideale per i tuoi{" "}
              <span className="text-orange-400 text-3xl">INVESTIMENTI</span>
            </h1>

            <h4 className="text-md font-oswald text-2xl">
              Il cliente avra' a disposizione la possibilita' di sciegliere tra
              diversi servizi che ritiene piu adeguato al proprio percorso di
              investimento
            </h4>
          </div>

          <img
            src="../images/servizi_1.png"
            className="w-52 h-64 absolute z-200 rounded-full -top-1 left-[88px] md:w-72 md:h-[370px] md:-top-[30px] md:left-[240px] lg:left-[368px] xl:w-[340px] xl:h-[400px] xl:left-[190px] xl:-top-[21px] 2xl:left-[360px]"
          />
        </div>

        <div className="w-16 h-12 xl:w-20 xl:h-14 bg-white rounded-tl-2xl rounded-br-2xl  shadow-md shadow-black  backdrop-blur-4xl bg-opacity-70 backdrop-filter  absolute z-10 right-16 top-10 md:right-52 lg:right-[336px] xl:left-[490px] 2xl:left-[640px]"></div>
        <img
          src="../images/emoji.png"
          className="w-8 h-8 xl:w-10 xl:h-10 absolute z-20 right-20 top-12 md:right-56 lg:right-[352px] xl:left-[510px] 2xl:left-[660px]"
        />
        <div className="w-28 h-12 xl:w-32 xl:h-14 bg-white rounded-tl-2xl rounded-br-2xl  shadow-md shadow-black  backdrop-blur-4xl bg-opacity-70 backdrop-filter  absolute z-10 left-14 top-52 md:left-40 lg:left-[264px] xl:left-[90px] 2xl:left-[254px]"></div>

        <div className="flex space-x-1 items-center absolute z-20 left-[68px] top-[218px] md:left-[172px] lg:left-[274px] xl:left-[98px] 2xl:left-[262px]">
          <img src="../images/trade.png" className="w-8 h-8 xl:w-10 xl:h-10 " />
          <h4 className="text-sm xl:text-lg font-bold font-oswald">Strategy</h4>
        </div>
        <div className="w-32 h-12 xl:w-40 xl:h-14 bg-white rounded-tl-2xl rounded-br-2xl  shadow-md shadow-black  backdrop-blur-4xl bg-opacity-70 backdrop-filter  absolute z-10 right-10 top-56 md:right-40 lg:right-64 xl:left-[490px] xl:top-72 2xl:left-[660px]"></div>

        <div className="flex space-x-1 items-center absolute z-20 right-14 top-[232px] md:right-44 lg:right-[270px] xl:top-[296px] xl:left-[506px] 2xl:left-[670px]">
          <img
            src="../images/bitcoin.png"
            className="w-8 h-8 xl:w-10 xl:h-10"
          />
          <h4 className="text-sm xl:text-lg font-bold font-oswald">
            Investiment
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
