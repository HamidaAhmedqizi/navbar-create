import { IoChevronDownSharp } from "react-icons/io5";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    cName: "nav-item",
  },
  {
    id: 2,
    title: "About",
    path: "./about",
    cName: "nav-item",
  },
  {
    id: 3,
    title: "Services",
    path: "./services",
    cName: "nav-item",
    icon: <IoChevronDownSharp />,
    dropdownMenu: [
      {
        id: 1,
        title: "Unity",
        path: "./unity",
        cName: "submenu-item",
      },
      {
        id: 2,
        title: "EH Trade",
        path: "./ehtrade",
        cName: "submenu-item",
      },
      {
        id: 3,
        title: "Yusif-um MMC",
        path: "./yusifummmc",
        cName: "submenu-item",
      },
    ],
  },
  {
    id: 4,
    title: "Contact Us",
    path: "./contact",
    cName: "nav-item",
  },
];
