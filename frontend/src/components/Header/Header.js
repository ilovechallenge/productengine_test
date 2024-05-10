import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../services/store";
import { FaUser } from "react-icons/fa";

import "./header.css";

function AppHeader() {
    const dispatch = useDispatch();

    const authState = useSelector((state) => state.app);
    const handleLogout = () => {
        dispatch(setToken({token: null}))
    }
    return (
        <nav className="top-nav">
          <div className="top-nav-left">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/activation">Activation</Link></li>
              <li><Link to="/account">Account</Link></li>
            </ul>
          </div>
          <div className="top-nav-right">
            <div className="user-profile">
              <FaUser />
              <div className="dropdown">
                <button className="dropbtn">User Name</button>
                <div className="dropdown-content">
                  <a href="#">Profile</a>
                  <a href="#">Settings</a>
                  <li onClick={handleLogout}>Logout</li>
                </div>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default AppHeader;