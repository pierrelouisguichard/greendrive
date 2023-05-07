import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Login() {
  return (
    <div style={container}>
      <Tabs style={{ ...position, ...rectangle }} fill>
        <Tab eventKey="home" title="User">
          <div style={{ ...position, ...title }}>User Login</div>
          <div style={{ ...position, ...titles, top: "41%" }}>Email</div>
          <form>
            <input
              type="text"
              required
              style={{ ...position, ...textFields, top: "46%" }}
            ></input>
            <input
              type="password"
              required
              style={{ ...position, ...textFields, top: "55%" }}
            ></input>
            <a style={{ ...position, ...LoginButton }} href="/dashboard">
              Login{" "}
            </a>
          </form>
          <div style={{ ...position, ...titles, top: "50%" }}>Password</div>
          <a style={forgotPassword} href="/error">
            Forgot password?
          </a>
          <a style={{ ...position, ...registerButton }} href="/register">
            Register
          </a>
        </Tab>
        <Tab eventKey="profile" title="Staff">
          <div style={{ ...position, ...title }}>Staff Login</div>
          <div style={{ ...position, ...titles, top: "41%" }}>Email</div>
          <form>
            <input
              type="text"
              required
              style={{ ...position, ...textFields, top: "46%" }}
            ></input>
            <input
              type="password"
              required
              style={{ ...position, ...textFields, top: "55%" }}
            ></input>
            <a style={{ ...position, ...LoginButton }} href="/staffdashboard">
              Login{" "}
            </a>
          </form>
          <div style={{ ...position, ...titles, top: "50%" }}>Password</div>
          <a style={forgotPassword} href="/error">
            Forgot password?
          </a>
          <a style={{ ...position, ...registerButton }} href="/register">
            Register
          </a>
        </Tab>
      </Tabs>
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
  top: "56.5%",
  left: "50%",
  transform: "translateX(54px)",
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
  top: "38%",
};

const titles = {
  transform: "translateX(-150px)",
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
  top: "61%",
  border: "none",
};

const registerButton = {
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "bold",
  top: "66%",
};

export default Login;
