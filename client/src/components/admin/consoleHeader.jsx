import logo from "../../assets/sound-lab-black.svg";
import { AvatarMenu } from "../commons/avatarMenu";

export const ConsoleHeader = () => {
  return (
    <div className="flex items-center justify-between m-3 ">
      <img src={logo} alt="logo" className="w-52" />
      <AvatarMenu />
    </div>
  );
};
