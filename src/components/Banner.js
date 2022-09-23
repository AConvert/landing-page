import React from "react";

const Banner = () => {
  return (
    <div>
      {" "}
      <div className="w-full h-full flex justify-center mt-12 md:mt-16 relative xl:mt-10">
        <section>
          <div className="flex flex-col items-center space-y-6 xl:flex-row xl:justify-center xl:space-x-10  xl:mx-20">
            <img
              src="../images/crypto_new.jpg"
              className="h-80 w-80  md:w-[400px] md:h-[400px] xl:w-[520px] xl:h-[520px]"
            />
            <div className="xl:flex xl:flex-col text-center xl:space-y-4 xl:text-left">
              <h1 className="font-bold font-oswald text-lg md:text-2xl xl:text-3xl px-6 md:px-20  xl:px-0">
                La{" "}
                <span className="text-orange-400 text-xl md:text-3xl xl:text-4xl">
                  SOLUZIONE
                </span>{" "}
                ideale per i tuoi{" "}
                <span className="text-orange-400 text-xl md:text-3xl xl:text-4xl">
                  INVESTIMENTI
                </span>
              </h1>
              <h4 className="hidden xl:inline-block xl:font-space_mono xl:font-semibold xl:text-xl xl:mr-20 ">
                Il cliente avra' a disposizione la possibilita' di sciegliere
                tra diversi servizi che ritiene piu adeguato al proprio percorso
                di investimento.
              </h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
