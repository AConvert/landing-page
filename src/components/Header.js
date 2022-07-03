import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubMenu = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="w-screen h-24 lg:h-40 flex px-4 py-4 items-center justify-around relative bg-gradient-to-r from-gray-50 to-gray-300">
      <div className="flex space-x-2 pl-4 lg:pl-8 items-center ">
        <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-oswald">
          SI
        </h1>
        <span className="w-[2px] h-12 lg:h-16 bg-black "></span>
        <div className="flex flex-col text-sm md:text-xl xl:text-3xl lg:flex lg:flex-col lg:text-2xl font-mono_space">
          <h2>Smart Investor</h2>
        </div>
      </div>

      <div className="md:hidden ">
        <div className="space-x-4">
          <MenuIcon
            fontSize="large"
            className=" bg-orange-400 text-black p-1 rounded-md cursor-pointer shadow-sm shadow-black hover:bg-orange-600"
            onClick={handleMenu}
          />
          <FacebookIcon
            fontSize="large"
            className="bg-orange-400 text-black p-1 rounded-md cursor-pointer shadow-sm shadow-black hover:bg-orange-600"
          />
        </div>
        <div
          className={
            isOpen
              ? "flex w-full flex-col font-space_mono absolute z-100 top-20 left-0 float-right py-4 px-4 bg-gradient-to-r from-gray-50 to-gray-300 "
              : "hidden"
          }
        >
          <div className="flex w-full items-center space-x-1 ">
            <div className=" w-full p-2 rounded-sm border-b-2 border-orange-600 hover:bg-white duration-500">
              <a href="#storia" active className="text-sm text-black ">
                LA MIA STORIA
              </a>
            </div>
          </div>
          <div className=" w-full p-2 rounded-sm border-b-2 border-orange-600 hover:bg-white duration-500">
            <a
              onClick={handleSubMenu}
              href="#servizi"
              className="text-sm text-black"
            >
              SERVIZI
            </a>
            <div
              className={
                openDropdown
                  ? "flex flex-col absolute z-100 bg-gradient-to-r from-gray-50 to-gray-300"
                  : "hidden"
              }
            >
              <a
                href="#corso"
                className="p-2 rounded-sm text-sm hover:bg-white duration-500 text-black font-space_mono"
              >
                Corso Base
              </a>
              <a
                href="#gestione"
                className="p-2 rounded-sm text-sm hover:bg-white duration-500 text-black font-space_mono"
              >
                Gestione Portafoglio
              </a>
            </div>
          </div>
          <div className=" w-full p-2 rounded-sm border-b-2 border-orange-600 hover:bg-white duration-500">
            <a href="#contatti" className="text-sm text-black ">
              CONTATTI
            </a>
          </div>
        </div>
      </div>

      {/* inline navbar */}
      <div className="hidden md:flex md:flex-1 md:items-center md:space-x-10 md:justify-end md:px-8 lg:px-16 lg:flex lg:space-x-24 font-space_mono">
        <div className=" rounded-sm border-b-2 border-opacity-0 hover:border-opacity-100 hover:border-orange-600 duration-500">
          <a
            href="#storia"
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-oswald text-black "
          >
            LA MIA STORIA
          </a>
        </div>
        <div
          onClick={handleSubMenu}
          className="  rounded-sm border-b-2 border-opacity-0 hover:border-opacity-100 hover:border-orange-600 duration-500"
        >
          <a
            href="#servizi"
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-oswald"
          >
            SERVIZI
          </a>
          <div
            className={
              openDropdown ? "flex flex-col absolute z-100 py-4" : "hidden"
            }
          >
            <a
              href="#corso"
              className="py-2 px-2 md:text-lg lg:text-xl rounded-sm font-oswald border-b-2 border-orange-600 hover:bg-gray-100 duration-500"
            >
              Corso Base
            </a>
            <a
              href="#gestione"
              className="py-2 px-2 md:text-lg lg:text-xl rounded-sm font-oswald border-b-2 border-orange-600 hover:bg-gray-100 duration-500"
            >
              Gestione Portafoglio
            </a>
          </div>
        </div>
        <div className="  rounded-sm border-b-2 border-opacity-0 hover:border-opacity-100 hover:border-orange-600 duration-500">
          <a
            href="#contatti"
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-oswald text-black "
          >
            CONTATTI
          </a>
        </div>
        <div className="bg-orange-400 text-black p-2 rounded-md cursor-pointer shadow-sm shadow-black hover:bg-orange-600">
          <img
            src="../images/facebook.png"
            className="h-6 w-6 xl:h-8 xl:w-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
