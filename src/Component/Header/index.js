import React from "react";
import { FaAngleDown, FaSearch, FaBell } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Formik } from "formik";

import logo from "../../Assets/images/Daco_4080681.png";
import { dropdown_options } from "../../Constatnts";
import HeaderStyle from "./Header.style";

const Header = (props) => {
  return (
    <HeaderStyle>
      <div className="flex">
        <img src={logo} alt="logo" height={23} className="logo" />
        <div className="flex dropdowns">
          {dropdown_options.map((option) => (
            <p className="flex">
              {option}
              <FaAngleDown />
            </p>
          ))}
        </div>
      </div>

      <div className="flex end-box">
        <Formik>
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="input"
            />
          </div>
        </Formik>
        <div className="icon-box">
          <AiOutlineBell className="icon" />
        </div>
        <div className="icon-box">
          <CgProfile className="icon" />
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
