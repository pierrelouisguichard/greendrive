import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Register() {
  return (
    <div style={container}>
      <Tabs fill style={{ ...position, ...rectangle }}>
        <Tab eventKey="home" title="User">
          <div style={{ ...position, ...title }}>User Register</div>
          <div style={{ ...position, ...titles, top: "34%" }}>First Name</div>
          <input
            type="text"
            style={{ ...position, ...textFields, top: "38%" }}
          ></input>
          <div style={{ ...position, ...titles, top: "41%" }}>Last Name</div>
          <input
            type="text"
            style={{ ...position, ...textFields, top: "45%" }}
          ></input>
          <div style={{ ...position, ...titles, top: "48%" }}>Email</div>
          <input
            type="text"
            style={{ ...position, ...textFields, top: "52%" }}
          ></input>
          <div style={{ ...position, ...titles, top: "55%" }}>Password</div>
          <input
            type="password"
            style={{ ...position, ...textFields, top: "59%" }}
          ></input>
          <div style={{ ...position, ...titles, top: "62%" }}>
            Re-Enter Password
          </div>
          <input
            type="password"
            style={{ ...position, ...textFields, top: "66%" }}
          ></input>
          <a style={{ ...position, ...registerButton }} href="/login">
            Register
          </a>
        </Tab>

        <Tab eventKey="profile" title="Staff">
          <div style={{ ...position, ...title }}>Staff Register</div>
          <div style={{ ...position, ...titles, top: "34%" }}>First Name</div>
          <input
            type="text"
            style={{ ...position, ...textFields, top: "38%" }}
          ></input>
          <div style={{ ...position, ...titles, top: "41%" }}>Last Name</div>
          <input
            type="text"
            style={{ ...position, ...textFields, top: "45%" }}
          ></input>
          <div style={{ ...position, ...titles, top: "48%" }}>Email</div>
          <input
            type="text"
            style={{ ...position, ...textFields, top: "52%" }}
          ></input>
          <div style={{ ...position, ...titles, top: "55%" }}>Password</div>
          <input
            type="password"
            style={{ ...position, ...textFields, top: "59%" }}
          ></input>
          <div style={{ ...position, ...titles, top: "62%" }}>
            Re-Enter Password
          </div>
          <input
            type="password"
            style={{ ...position, ...textFields, top: "66%" }}
          ></input>
          <a style={{ ...position, ...registerButton }} href="/login">
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
  height: "700px",
};

const title = {
  fontSize: "45px",
  fontWeight: "bold",
  top: "30%",
};

const titles = { transform: "translateX(-150px)" };

const textFields = {
  color: "white",
  backgroundColor: "rgb(0,0,0,0)",
  width: "299px",
  border: "none",
  borderBottom: "2px solid white",
};

const registerButton = {
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
  top: "72%",
};

export default Register;
