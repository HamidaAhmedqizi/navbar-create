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
    icon: <IoChevronDownSharp />
  },
  {
    id: 4,
    title: "Contact Us",
    path: "./contact",
    cName: "nav-item",
  },
];

export const serviceDropdown = [
  {
    id: 1,
    title: "Marketing",
    path: "./marketing",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Consulting",
    path: "./consulting",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Design",
    path: "./design",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Development",
    path: "./development",
    cName: "submenu-item",
  },

];