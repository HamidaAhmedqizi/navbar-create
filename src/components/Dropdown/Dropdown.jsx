import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Dropdown/Dropdown.css";

const Dropdown = ({ data }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownClick = () => {
    setDropdown((prevDropdown) => !prevDropdown);
  };

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={handleDropdownClick}
      >
        {data.map((item) => (
          <li key={item.id}>
            <Link to={item.path} className={item.cName}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
