import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../assets/style/loginpage.scss";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const success = await login(user, password); 
  
    if (success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Giriş başarılı",
        showConfirmButton: false,
        timer: 1500,
      });
  
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Maalesef",
        text: "Kullanıcı adın ya da şifren hatalı, tekrar dene!",
        footer: '<a href="#">Şifrenizi mi unuttunuz?</a>',
      });
    }

    setUser("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <div className="head"></div>
      <form className="login-form" onSubmit={handleLogin}>
        <h3>Giriş</h3>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <div className="password-container">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Şifre"
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>
        <input type="submit" value={"Giriş Yap"} />
        <Link to="/arthouse/exhibitionlist">Ziyaretçi olarak devam et</Link>
      </form>
    </div>
  );
};

export default LoginPage;
