import { useState } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { FaBarsStaggered } from "react-icons/fa6";
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
                  <Link to={item.path}>{item.title}</Link>
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

        <div className="buttons_cont">
          <button onClick={showingNav} className="bars__icon">
 
            {
              isNavShowing ? <HiOutlineXMark /> : <FaBarsStaggered />
            }

          </button>

          <Button />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
