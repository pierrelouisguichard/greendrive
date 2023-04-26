import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import SecNav from "./NewsComponents/SecNav";

const Forum = () => {
  return (
    <div style={container}>
      <SecNav />
      <div style={cardsContainer}>
        <a href="/error" style={{ textDecoration: "none", color: "black" }}>
          <Card style={card}>
            <Card.Body>
              <Card.Title>
                <h3>Hybrid vehicles consume on up to 50% less CO2</h3>
              </Card.Title>
              <Card.Text>
                Hybrid vehicles generally emit less CO2 than traditional
                gasoline vehicles due to their improved fuel efficiency and the
                use of electric power. The amount of CO2 saved by a hybrid
                vehicle compared to a normal vehicle depends on several factors,
                such as the make and model of the vehicles being compared, the
                driving conditions, and the fuel efficiency of each vehicle.
              </Card.Text>
              <FontAwesomeIcon
                icon={faComment}
                size="lg"
                style={{ color: "#035F48" }}
              />{" "}
              65
            </Card.Body>
          </Card>
        </a>
        <a href="/error" style={{ textDecoration: "none", color: "black" }}>
          <Card style={card}>
            <Card.Body>
              <Card.Title>
                <h3>The Cost Savings of Hybrid Vehicles</h3>
              </Card.Title>
              <Card.Text>
                While hybrid vehicles may have a higher upfront cost than
                traditional gasoline vehicles, they can offer significant cost
                savings over the life of the car. Due to their improved fuel
                efficiency, hybrid vehicles require less frequent trips to the
                gas station, which can result in lower fuel costs. Additionally,
                some hybrid vehicles may qualify for tax incentives or other
                rebates, further reducing the cost of ownership. Over time,
                these cost savings can add up and make a hybrid vehicle a
                financially smart choice.
              </Card.Text>
              <FontAwesomeIcon
                icon={faComment}
                size="lg"
                style={{ color: "#035F48" }}
              />{" "}
              52
            </Card.Body>
          </Card>
        </a>
        <a href="/error" style={{ textDecoration: "none", color: "black" }}>
          <Card style={card}>
            <Card.Body>
              <Card.Title>
                <h3>The Benefits of Hybrid Vehicles for the Environment</h3>
              </Card.Title>
              <Card.Text>
                Hybrid vehicles offer numerous benefits for the environment.
                Their improved fuel efficiency means they use less gasoline,
                reducing the demand for fossil fuels and lowering greenhouse gas
                emissions. Additionally, the use of electric power in hybrid
                vehicles means they produce fewer harmful pollutants, such as
                nitrogen oxides and particulate matter. By choosing a hybrid
                vehicle, drivers can help reduce their environmental impact and
                contribute to a more sustainable future.
              </Card.Text>
              <FontAwesomeIcon
                icon={faComment}
                size="lg"
                style={{ color: "#035F48" }}
              />{" "}
              38
            </Card.Body>
          </Card>
        </a>
        <a href="/error" style={{ textDecoration: "none", color: "black" }}>
          <Card style={card}>
            <Card.Body>
              <Card.Title>
                <h3>How Hybrid Vehicles Work: A Simple Explanation</h3>
              </Card.Title>
              <Card.Text>
                Hybrid vehicles are becoming increasingly popular due to their
                improved fuel efficiency and lower emissions. But how do they
                work? In a hybrid vehicle, there are two power sources: an
                internal combustion engine and an electric motor. The engine and
                motor work together to power the car, with the motor assisting
                the engine during acceleration and the engine recharging the
                battery during braking. This combination allows the car to use
                less fuel and emit less CO2 compared to traditional gasoline
                vehicles.
              </Card.Text>
              <FontAwesomeIcon
                icon={faComment}
                size="lg"
                style={{ color: "#035F48" }}
              />{" "}
              23
            </Card.Body>
          </Card>
        </a>
      </div>
    </div>
  );
};

const card = {
  border: "none",
  padding: "15px",
  margin: "15px",
  width: "50vw",
};

const cardsContainer = {
  position: "absolute",
  top: "15%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const container = {
  color: "black",
  backgroundColor: "#E6E6E6",
  height: "130vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Bahnschrift, sans-serif",
  fontSize: "18px",
};

export default Forum;
