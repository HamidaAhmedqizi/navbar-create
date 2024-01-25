import { useState } from "react";
import '../Dropdown/Dropdown';
import '../Navbar/Navbar.css'
import { Link } from "react-router-dom";
import { navItems } from "../NavItems";
import Dropdown from "../Dropdown/Dropdown";
import { HiOutlineXMark } from "react-icons/hi2";

const Navbar = () => {
  
  const [dropdown, setDropdown] = useState(false);

  const [isNavShowing, setIsNavShowing] = useState(false);

  const showingNav = () => {
    setIsNavShowing((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <Link to={"/"} className="navbar_logo">
          Nature
        </Link>

        <ul className={`${isNavShowing ? "nav-items block" : "nav-items"}`}>
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <div className="text___icon">
                    <Link to={item.path}>{item.title}</Link> <span className="span__icon">{item.icon}</span>
                  </div>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>

        <button onClick={showingNav} className="bars__icon">
 
            {
              isNavShowing ? <HiOutlineXMark /> : <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="2.75"
                y="2.75"
                width="7.5"
                height="7.5"
                rx="2.25"
                stroke="#311F09"
                stroke-width="1.5"
              />
              <rect
                x="13.75"
                y="2.75"
                width="7.5"
                height="7.5"
                rx="2.25"
                stroke="#311F09"
                stroke-width="1.5"
              />
              <rect
                x="2.75"
                y="13.75"
                width="7.5"
                height="7.5"
                rx="2.25"
                stroke="#311F09"
                stroke-width="1.5"
              />
              <rect
                x="13.75"
                y="13.75"
                width="7.5"
                height="7.5"
                rx="3.75"
                stroke="#FF8A00"
                stroke-width="1.5"
              />
            </svg>
            }

          </button>
      </nav>
    </>
  );
};

export default Navbar;
