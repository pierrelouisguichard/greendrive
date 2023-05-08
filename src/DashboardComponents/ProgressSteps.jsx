import { useState } from "react";

const bubbleSize = 40;

const progressTrackerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: 550,
  position: "absolute",
  top: "30%",
  left: "40%",
  transform: "translate(-50%, -50%)",
};

const progressBarStyle = {
  position: "absolute",
  top: "50%",
  left: 0,
  transform: "translateY(-50%)",
  width: "150%",
  height: 4,
  background: "#72A599",
};

const progressBarActiveStyle = {
  ...progressBarStyle,
  background: "white",
  transition: "0.4s ease",
};

const bubbleWrapperStyle = {
  position: "relative",
  zIndex: 1,
};

const bubbleStyle = {
  width: bubbleSize,
  height: bubbleSize,
  borderRadius: "50%",
  backgroundColor: "#035F48",
  border: "3px solid white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 19,
  color: "white",
  transition: "0.4s ease",
};

const bubbleCompletedStyle = {
  ...bubbleStyle,
  border: "3px solid white",
  backgroundColor: "white",
  color: "#035F48",
};

const bubbleWrapperActiveStyle = {
  ...bubbleWrapperStyle,
  zIndex: 2,
};

const progressButtonsStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: "0 -15px",
  marginTop: 100,
};

const buttonStyle = {
  borderRadius: 4,
  border: 0,
  background: "white",
  color: "#035F48",
  cursor: "pointer",
  padding: 8,
  width: 100,
  margin: 10,
  marginTop: 200,
  fontSize: 16,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: 1,
  outline: "none",
  transition: "0.2s ease",
};

const buttonStyleDisabled = {
  ...buttonStyle,
  background: "#035F48",
  color: "white",
  cursor: "not-allowed",
};

const ProgressSteps = () => {
  const [activeBubble, setActiveBubble] = useState(1);

  const incrementBubble = () => {
    setActiveBubble((prev) => prev + 1);
  };

  const decrementBubble = () => {
    setActiveBubble((prev) => prev - 1);
  };

  return (
    <div style={progressTrackerStyle}>
      <div style={progressBarStyle}></div>
      <div
        style={{
          ...progressBarActiveStyle,
          width: `${(activeBubble - 1) * 38}%`,
        }}
      ></div>
      {[1, 2, 3, 4, 5].map((step) => (
        <div
          key={step}
          style={{
            ...(activeBubble >= step ? bubbleCompletedStyle : bubbleStyle),
            ...(activeBubble === step
              ? bubbleWrapperActiveStyle
              : bubbleWrapperStyle),
            left: `${(step - 1) * 25}%`,
          }}
        >
          {activeBubble > step ? <span>&#10003;</span> : step}
        </div>
      ))}
      <div style={progressButtonsStyle}>
        <button
          style={activeBubble === 1 ? buttonStyleDisabled : buttonStyle}
          onClick={decrementBubble}
          disabled={activeBubble === 1}
        >
          Previous
        </button>
        <button
          style={activeBubble === 5 ? buttonStyleDisabled : buttonStyle}
          onClick={incrementBubble}
          disabled={activeBubble === 5}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;
