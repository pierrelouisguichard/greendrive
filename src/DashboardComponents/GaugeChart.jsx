import React from "react";
import ReactApexChart from "react-apexcharts";

class GaugeChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [76],
      options: {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "white",
              strokeWidth: "97%",
              margin: 5,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "22px",
                fontFamily: "Bahnschrift, sans-serif",
                color: "white",
                fontWeight: "bold",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        labels: ["Average Results"],
        colors: ["#ffffff"],
      },
      value: 76,
    };
  }

  handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (newValue >= 0 && newValue <= 100) {
      this.setState({ value: newValue });
    }
  };

  handleClick = () => {
    const newSeries = [this.state.value];
    this.setState({ series: newSeries });
  };

  render() {
    const { series } = this.state;
    const percentage = series[0];
    const spent = Math.round((percentage / 100) * 4000);
    return (
      <div>
        <div>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
          />
        </div>
        <div>Estimate: £4000</div>
        <div>Spent: £{spent}</div>
        <div>
          <div>
            <label htmlFor="value-input">Enter percentage value:</label>
            <input
              id="value-input"
              type="number"
              min="0"
              max="100"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <button style={{ ...position, ...Button }} onClick={this.handleClick}>
            Change Value
          </button>
        </div>
      </div>
    );
  }
}

const position = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Button = {
  textDecoration: "none",
  width: "200px",
  height: "40px",
  background: "white",
  borderRadius: "3px",
  color: "#035F48",
  fontSize: "20px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "115%",
  border: "none",
};

export default GaugeChart;
