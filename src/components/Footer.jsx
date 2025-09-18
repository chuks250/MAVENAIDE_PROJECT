import { Combine, CombineIcon } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaRegCopyright,
  FaXTwitter,
} from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";


const Footer = () => {
  return (
    <div className="bg-[#D1E5E4] mt-14 pt-10 pb-24">
      <div className="flex justify-around">
        <div className="inline-block w-[500px]">
          <h1 className="font-bricolageGrotesque font-medium capitalize text-6xl ">
            <span className="text-[#5E6767]">Seamless</span> virtual assistance
            for productivity.
          </h1>
          {/* start */}
          <div className="block pt-5">
            <p className="flex items-center gap-1">
              <RiHomeOfficeLine className="w-[20] h-[20px] text-xl" />
              <span className="capitalize font-nunito font-semibold text-sm">
                Office address
              </span>
            </p>
            <p className="font-nunito text-base">xxxx</p>
          </div>
          {/* end */}
          {/* start */}
          <div className="block pt-5">
            <p className="flex items-center gap-1">
              <MdConnectWithoutContact className="w-[20] h-[20px] text-xl" />
              <span className="capitalize font-nunito font-semibold text-sm">
                contact
              </span>
            </p>
            <p className="font-nunito text-base">xxxx | xxxxxx</p>
          </div>
          {/* end */}
        </div>
        {/* start */}
        <div className="text-[#0A142F]">
          <ul className="capitalize font-nunito">
            <li className="font-bold text-xl pb-4">legal:</li>
            <li className="font-mediumm text-base">Privacy Policy</li>
            <li className="font-mediumm text-base pt-2">terms of service</li>
            <li className="font-mediumm text-base pt-2">cookie policy</li>
          </ul>
        </div>
        {/* end */}
        {/* start */}
        <div className="text-[#0A142F]">
          <ul className="capitalize font-nunito">
            <li className="font-bold text-xl pb-4">company:</li>
            <li className="font-mediumm text-base">about us</li>
            <li className="font-mediumm text-base pt-2">services</li>
            <li className="font-mediumm text-base pt-2">trainings</li>
            <li className="font-mediumm text-base pt-2">blog</li>
            <li className="font-mediumm text-base pt-2">contact us</li>
          </ul>
        </div>
        {/* end */}
      </div>
      <div className="grid place-content-center place-items-center">
        <p className="flex items-center gap-1 font-inter font-normal text-base">
          <FaRegCopyright className="w-3 h-4" /> 2025. MavenAid. All rights
          reserved.
        </p>
        <div className="flex gap-5 items-center pt-4">
          <span>
            <FaFacebookF className="w-3 h-4 text-[#0A142F]" />
          </span>
          <span>
            <FaXTwitter className="w-4 h-6 text-[#0A142F]" />
          </span>
          <span>
            <FaInstagram className="w-4 h-6 text-[#0A142F]" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
