import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import axios from "./api/axios";
const LOGIN_URL = "/auth";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucces] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 400) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div style={container}>
      <div style={{ ...position, ...rectangle }}>
        <div style={{ ...position, ...title }}>Login</div>
        <div style={{ ...position, ...titles, top: "30%" }}>Email</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            value={user}
            autoComplete="off"
            required
            style={{ ...position, ...textFields, top: "40%" }}
          ></input>
          <input
            type="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            style={{ ...position, ...textFields, top: "60%" }}
          ></input>
          <button style={{ ...position, ...LoginButton }}>Login</button>
        </form>
        <div style={{ ...position, ...titles, top: "50%" }}>Password</div>
        <a style={forgotPassword} href="/dashboard">
          Forgot password?
        </a>
        <a style={{ ...position, ...registerButton }} href="/register">
          Register
        </a>
      </div>
    </div>
  );
}

const container = {
  backgroundColor: "black",
  height: "100vh",
  width: "100vw",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "14px",
};

const forgotPassword = {
  textDecoration: "none",
  color: "#72A699",
  position: "absolute",
  top: "65%",
  left: "75.5%",
  transform: "translate(-50%, -50%)",
  fontSize: "12px",
  fontWeight: "normal",
};

const position = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const rectangle = {
  backgroundColor: "#035F48",
  borderRadius: "10px",
  width: "400px",
  height: "500px",
};

const title = {
  fontSize: "45px",
  fontWeight: "bold",
  top: "18%",
};

const titles = {
  left: "12.5%",
  transform: "none",
};

const textFields = {
  color: "white",
  backgroundColor: "rgb(0,0,0,0)",
  width: "299px",
  border: "none",
  borderBottom: "2px solid white",
};

const LoginButton = {
  textDecoration: "none",
  width: "299px",
  height: "45px",
  background: "white",
  borderRadius: "3px",
  color: "#035F48",
  fontSize: "20px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "76%",
  border: "none",
};

const registerButton = {
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "bold",
  top: "90%",
};

export default Login;
