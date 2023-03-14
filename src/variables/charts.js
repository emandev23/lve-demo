export const barChartData = [
  {
    name: "Livrer",
    data: [30, 25, 50, 12, 6, 42],
  },
  {
    name: "Non livrer",
    data: [3, 6, 1, 5, 3, 2],
  },
  {
    name: "retour",
    data: [0, 1, 0, 2, 3, 4],
  },
];

export const barChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    categories: ["Casablanca", "Rabat", "Tanger", "Fes", "Ouajda", "Marrakech"],
    labels: {
      style: {
        colors: "#A0AEC0",
        fontSize: "12px",
      },
    },
    show: true,
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "#A0AEC0",
    labels: {
      show: true,
      style: {
        colors: "#A0AEC0",
        fontSize: "14px",
      },
    },
  },
  fill: {
    colors: ["#00BD34", "#F70707", "#ED8936"],
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
      columnWidth: "30px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};

export const lineChartData = [
  {
    name: "Livrer",
    data: [30, 25, 50, 12, 6, 42],
  },
  {
    name: "Non livrer",
    data: [3, 6, 1, 5, 3, 2],
  },
  {
    name: "retour",
    data: [0, 1, 0, 2, 3, 4],
  },
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#00BD34", "#F70707", "#ED8936"],
  },
  colors: ["#00BD34", "#F70707", "#ED8936"],
};


export const lineChartDataH = [
  {
    name: "Livrer",
    data: [30, 25, 50, 12, 6, 42],
  },
  {
    name: "Non livrer",
    data: [3, 6, 1, 5, 3, 2],
  },
  {
    name: "retour",
    data: [0, 1, 0, 2, 3, 4],
  },
];

export const lineChartOptionsH = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: ["8h>10h", "10h>12h", "12h>14h", "14h>16h", "16h>18h", "18h>20h"],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#00BD34", "#F70707", "#ED8936"],
  },
  colors: ["#00BD34", "#F70707", "#ED8936"],
};
