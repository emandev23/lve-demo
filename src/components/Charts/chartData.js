export const pieChartOptions = {
  labels: ["Livrer", "Non Livrer", "Retour"],
  colors: ["#00BD34", "#F70707", "#ED8936"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: true,
  },
  dataLabels: {
    enabled: true,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: true,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#00BD34", "#F70707", "#ED8936"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const pieChartData = [];
export const donutChartOptionsCharts1 = {
  series: [50, 15, 10],
  labels: ["Livrer", "Non Livrer", "Retour"],
  colors: ["#00BD34", "#F70707", "#ED8936"],
  chart: {
    width: "100%"
  },
  states: {
    hover: {
      filter: {
        type: "none"
      }
    }
  },
  legend: {
    show: true
  },
  dataLabels: {
    enabled: false
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: true,
      donut: {
        labels: {
          show: true
        }
      }
    }
  },

  fill: {
    colors:  ["#00BD34", "#F70707", "#ED8936"]
  },
  tooltip: {
    enabled: true,
    theme: "dark"
  }
};

export const donutChartDataCharts1 = [50, 15, 10];

