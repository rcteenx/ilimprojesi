import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaRegFileAlt,
  FaInfoCircle,
  FaWifi,
  FaStar,
  FaHome,
  FaBlog,
  FaSitemap,
  FaGoogle,
  FaMobileAlt,
  FaRev,
  FaAlignLeft,
} from "react-icons/fa";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import {
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

const iconTypes = {
  AiOutlineFileText: AiOutlineFileText,
  AiOutlineBarChart: AiOutlineBarChart,
  AiOutlineMail: AiOutlineMail,
  AiOutlineSetting: AiOutlineSetting,
  AiOutlineLogout: AiOutlineLogout,
  BsArrowLeftShort: BsArrowLeftShort,
  BsSearch: BsSearch,
  BsChevronDown: BsChevronDown,
  BsFillImageFill: BsFillImageFill,
  BsReverseLayoutTextSidebarReverse: BsReverseLayoutTextSidebarReverse,
  BsPerson: BsPerson,
  facebook: FaFacebook,
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  arrowright: FaArrowRight,
  regfilealt: FaRegFileAlt,
  infocircle: FaInfoCircle,
  wifi: FaWifi,
  star: FaStar,
  home: FaHome,
  blog: FaBlog,
  sitemap: FaSitemap,
  google: FaGoogle,
  mobilealt: FaMobileAlt,
  rev: FaRev,
  alignleft: FaAlignLeft,
  menu: AiOutlineMenu,
  menuClose: AiOutlineClose,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
