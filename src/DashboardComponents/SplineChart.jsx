import React from "react";
import ReactApexChart from "react-apexcharts";

const position = {
  position: "absolute",
  top: "20%",
  width: "100%",
};

class SplineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "series1",
          data: [11, 20, 38, 41, 52, 70],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        yaxis: {
          min: 0,
          max: 100,
          tickAmount: 6,
          labels: {
            formatter: function (val, index) {
              return Math.round(val);
            },
          },
        },
        fill: {
          colors: ["#fff"],
          type: "solid",
        },
        colors: ["#fff"],
      },
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
          style={position}
        />
      </div>
    );
  }
}

export default SplineChart;
