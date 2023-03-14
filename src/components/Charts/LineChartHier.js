import React from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartDataH, lineChartOptionsH } from "variables/charts";

class LineChartHier extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartDataH: [],
      chartOptionsH: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartDataH: lineChartDataH,
      chartOptionsH: lineChartOptionsH,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptionsH}
        series={this.state.chartDataH}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChartHier;
