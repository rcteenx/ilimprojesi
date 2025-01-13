"use client";
import { useState } from "react";
import smd from "@/content/data/siteMetaData";

import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import {
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Akış", link: "/akis" },
    { title: "Ara", link: "/ara", icon: <BsSearch /> },
    {
      title: "Yazılar",
      link: "/yazilar",
      spacing: true,
      icon: <AiOutlineFileText />,
    },
    {
      title: "Deneyimden",
      link: "/deneyimden",
      icon: <BsFillImageFill />,
    },
    {
      title: "Sorular",
      link: "/sorular",
      icon: <BsReverseLayoutTextSidebarReverse />,
    },
    { title: "Profil", link: "/profil", spacing: true, icon: <BsPerson /> },
    { title: "Mesajlar", link: "/inbox", icon: <AiOutlineMail /> },
    { title: "Ayarlar", link: "/ayarlar", icon: <AiOutlineSetting /> },
    { title: "Çıkış", link: "/cikis", icon: <AiOutlineLogout /> },
  ];
  const pathname = usePathname();
  return (
    <div
      className={` h-screen p-2 pt-5 lg:p-5 lg:pt-8 ${
        open ? "w-72" : "w-12 lg:w-20"
      } duration-300 relative border-r hidden md:block `}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        } `}
        onClick={() => setOpen(!open)}
      />
      <div className=" inline-flex">
        <img
          src={smd.siteOwner}
          alt={smd.title}
          className={` h-7 w-7 lg:w-8 lg:h-8 rounded cursor-pointer block float-left mr-2 duration-700 ${
            !open && "rotate-[360deg]"
          }`}
        />
        <h2
          className={`my-0 text-gray-600 origin-left font-medium text-xl lg:text-2xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          ilgiBilgi
        </h2>
      </div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <Link key={index} href={menu.link}>
            <li
              key={index}
              className={`text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.spacing ? "mt-4" : "mt-1"
              } ${pathname === menu.link ? "bg-light-white rounded-md" : ""}`}
            >
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <RiDashboardFill />}
              </span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
              {menu.submenu && open && (
                <BsChevronDown
                  className={` ${submenuOpen && "rotate-180"}`}
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                />
              )}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
