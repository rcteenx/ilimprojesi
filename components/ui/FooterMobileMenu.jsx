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

export default function FooterMobileMenu({ children }) {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Akış", link: "/akis" },
    { title: "Ara", link: "/ara", icon: <BsSearch /> },
    { title: "Yazılar", link: "/yazilar", icon: <AiOutlineFileText /> },
    {
      title: "Deneyimden",
      link: "/deneyimden",
      spacing: true,
      icon: <BsFillImageFill />,
    },
    {
      title: "Sorular",
      link: "/sorular",
      icon: <BsReverseLayoutTextSidebarReverse />,
    },
    { title: "Profil", link: "/profil", spacing: true, icon: <BsPerson /> },
  ];
  const pathname = usePathname();
  return (
    <footer className="fixed inset-x-0 bottom-0 md:hidden bg-white border-t">
      <ul className=" py-2 flex flex-wrap justify-around	border-t">
        {Menus.map((menu, index) => (
          <Link key={index} href={menu.link}>
            <li
              key={index}
              className={`text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                pathname === menu.link ? "bg-light-white rounded-md" : ""
              }`}
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
            </li>
          </Link>
        ))}
      </ul>
    </footer>
  );
}
