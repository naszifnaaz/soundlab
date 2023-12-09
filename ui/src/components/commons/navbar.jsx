import { BiMenu, BiUser } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import sound_lab_black from "../../assets/sound-lab-black.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "./cartDrawer";
import { AvatarMenu } from "./avatarMenu";
import { useSelector } from "react-redux";
// import { AvatarMenu } from "./AvatarMenu";
// import { useSelector } from "react-redux";
import wirelessEarbuds from "../../assets/wireless-earbuds.png";
import neckbands from "../../assets/neckbands.png";
import wirelessHeadphones from "../../assets/wireless-headphones.png";
import wirelessSpeakers from "../../assets/wireless-speakers.png";
import wiredHeadphones from "../../assets/wired-headphones.png";
import wiredEarphones from "../../assets/wired-earphones.png";
import soundbars from "../../assets/soundbars.png";
import gamingHeadphones from "../../assets/gaming-headphones.png";

export const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [cartMenu, setCartMenu] = useState(false);
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  return (
    <>
      <div>
        {/* Pre NavBar */}
        <div className="bg-blue-50">
          <p className="text-center text-xs p-2 font-semibold lg:text-sm">
            Where Sound Meets Imagination!
          </p>
        </div>
        {/* Navbar */}
        <div className="flex items-center justify-between py-2 lg:p-4 bg-slate-50">
          <div className="flex items-center justify-center ml-5 ">
            {mobileNav ? (
              <AiOutlineClose
                className="text-3xl mr-1 cursor-pointer lg:hidden"
                onClick={() => setMobileNav((prev) => !prev)}
              />
            ) : (
              <BiMenu
                className="text-3xl mr-1 cursor-pointer lg:hidden"
                onClick={() => setMobileNav((prev) => !prev)}
              />
            )}

            <Link to={"/"}>
              <img
                src={sound_lab_black}
                className="w-40 lg:w-52 cursor-pointer"
                alt="sound-lab-logo-black"
              />
            </Link>
          </div>
          <div className="hidden lg:flex ">
            {NavItems.map((item, index) => {
              return (
                <Link
                  to={"/hello"}
                  key={index}
                  className="mr-4 text-lg font-light link link-underline link-underline-black text-black"
                >
                  {item.text}
                </Link>
              );
            })}
          </div>
          <div className="hidden lg:flex">
            <input
              type="text"
              placeholder='Search "Headphones..."'
              className="bg-gray-200 py-2 px-6 rounded-full w-80"
            />
          </div>
          <div className="flex items-center justify-center mr-5">
            {isLoggedIn ? (
              <AvatarMenu />
            ) : (
              <Link to={"/login"}>
                <BiUser className="text-3xl mr-3 cursor-pointer" />
              </Link>
            )}

            <BsBag
              className="text-3xl cursor-pointer"
              onClick={() => setCartMenu(true)}
            />
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={mobileNav ? "block lg:hidden" : "hidden lg:hidden"}>
          <h1 className="font-semibold m-3 text-lg">Categories</h1>
          <div className="grid grid-cols-3 m-4">
            <div className="p-5 flex flex-col items-center justify-center">
              <img src={wirelessEarbuds} alt="nav-item" />
              <p className="text-xs text-center">Wireless Earbuds</p>
            </div>
            <div className="p-5 flex flex-col items-center justify-center">
              <img src={neckbands} alt="nav-item" />
              <p className="text-xs text-center">Neckbands</p>
            </div>
            <div className="p-5 flex flex-col items-center justify-center">
              <img src={wirelessHeadphones} alt="nav-item" />
              <p className="text-xs text-center">Wireless Headphones</p>
            </div>
            <div className="p-5 flex flex-col items-center justify-center">
              <img src={wirelessSpeakers} alt="nav-item" />
              <p className="text-xs text-center">Wireless Speakers</p>
            </div>
            <div className="p-5 flex flex-col items-center justify-center">
              <img src={wiredHeadphones} alt="nav-item" />
              <p className="text-xs text-center">Wired Headphones</p>
            </div>
            <div className="p-5 flex flex-col items-center justify-center">
              <img src={wiredEarphones} alt="nav-item" />
              <p className="text-xs text-center">Wired Earphones</p>
            </div>
            <div className="p-5 flex flex-col items-center justify-center">
              <img src={soundbars} alt="nav-item" />
              <p className="text-xs text-center">Soundbars</p>
            </div>
            <div className="p-5 flex flex-col items-center justify-center">
              <img src={gamingHeadphones} alt="nav-item" />
              <p className="text-xs text-center">Gaming Headphones</p>
            </div>
          </div>
        </div>
      </div>
      <CartDrawer cartMenu={cartMenu} setCartMenu={setCartMenu} />
    </>
  );
};

const NavItems = [
  {
    text: "Earphones",
  },
  {
    text: "Headphones",
  },
  {
    text: "Speakers",
  },
];
