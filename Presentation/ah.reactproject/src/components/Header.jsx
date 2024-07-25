import React, { useContext, useEffect, useState } from "react";
import "../assets/style/header.scss";
import Logo from "../assets/img/logo2.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUserCheck, FaUserLock } from "react-icons/fa";
import users from "../data/data";
import AuthContext from "../context/AuthContext";




const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getCurrentUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      const user = users.find(
        (u) =>
          u.email === storedUser.email && u.password === storedUser.password
      );
      if (user) {
        setCurrentUser(user);
      }
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      getCurrentUser();
    }
  }, []);

  return (
    <>
      <nav className="header-container">
        <div className="brand">
          <img src={Logo} alt="" />
        </div>
        <ul className="liste">
          <li>
            <NavLink to="main">Anasayfa</NavLink>
          </li>
          {currentUser && isAuthenticated && (
            <li>
              <NavLink className="navLink" to="forms">
                Sergi İşlemleri
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="exhibitionlist">Sergiler</NavLink>
          </li>
          <li>
            <NavLink to="about">Hakkımızda</NavLink>
          </li>
          <li>
            <NavLink to="contact">İletişim</NavLink>
          </li>
          <li>
            <NavLink
              onClick={isAuthenticated ? handleLogout : handleLogin}
              className="navLink"
              to="login"
            >
              {isAuthenticated ? <FaUserCheck /> : <FaUserLock />}
            </NavLink>
          </li>
          {currentUser && isAuthenticated && (
            <div className="user-info">
              <div className="user-details">
                <span className="user-email">{currentUser.email}</span>
                <span className="user-role">{currentUser.role}</span>
              </div>
            </div>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
