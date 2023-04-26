import React from "react";
import ReactApexChart from "react-apexcharts";

class GaugeChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70],
      options: {
        fill: {
          colors: ["#72A599"],
          type: "solid",
        },
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
          },
        },
        labels: [""],
      },
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={350}
        />
      </div>
    );
  }
}

export default GaugeChart;
