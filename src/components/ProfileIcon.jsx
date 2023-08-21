import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <>
      <div className="flex gap-2">
        <span className="h-10 w-10 items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
          <TbGridDots size={20} color="#5f6368" className="mt-2.5 ml-2.5" />
        </span>
        <span className="h-10 w-10 relative flex justify-center items-center">
          <img
            src={ProfileRing}
            alt="profile-image"
            className="absolute cursor-pointer"
          />
          <span className="h-8 w-8 rounded-full overflow-hidden">
            <img src={Profile} className="h-full w-full object-cover " />
          </span>
        </span>
      </div>
    </>
  );
};

export default ProfileIcon;
