// import React, { useState, useEffect } from "react";
// import Dashboard from "views/Dashboard/Dashboard.js";
// import Tables from "views/Dashboard/Tables.js";
// import Billing from "views/Dashboard/Billing.js";
// import Profile from "views/Dashboard/Profile.js";
// import SignIn from "views/Pages/SignIn.js";
// import PerfHier from "views/Dashboard/PerfHier";
// import Activity from "views/Dashboard/Activity";
// import axios from "axios";

// import {
//   HomeIcon,
//   StatsIcon,
//   CreditIcon,
//   PersonIcon,
//   DocumentIcon,
//   RocketIcon,
//   SupportIcon,
// } from "components/Icons/Icons";

// const getUserRole = async () => {
//   const { data } = await axios
//     .post("http://localhost:8000/user/", { withCredentials: true })
//     .then((data) => {
//       console.log(data);
//     });
//   // console.log("Server response:", data);
//   // return { role: { role } };
// };

// const dashRoutes = async () => {
//   const user = await getUserRole();
//   return user && user.role === "admin"
//     ? [
//         {
//           path: "/dashboard",
//           name: "Dashboard",
//           icon: <HomeIcon color="inherit" />,
//           component: Dashboard,
//           layout: "/admin",
//         },
//         {
//           path: "/activity",
//           name: "Activity",
//           icon: <StatsIcon color="inherit" />,
//           component: Activity,
//           layout: "/admin",
//         },
//         {
//           path: "/tables",
//           name: "Tables",
//           icon: <StatsIcon color="inherit" />,
//           component: Tables,
//           layout: "/admin",
//         },
//         {
//           path: "/perfomanance d'hier",
//           name: "PerfHier",
//           icon: <CreditIcon color="inherit" />,
//           component: PerfHier,
//           layout: "/admin",
//         },
//         {
//           path: "/perfomanance d'ajourdhui",
//           name: "Perfomanance d'ajourdhui",
//           icon: <CreditIcon color="inherit" />,
//           component: PerfHier,
//           layout: "/admin",
//         },
//         {
//           path: "/Perfomanance de mois",
//           name: "Perfomanance de mois",
//           icon: <CreditIcon color="inherit" />,
//           component: PerfHier,
//           layout: "/admin",
//         },
//         {
//           name: "ACCOUNT PAGES",
//           category: "account",
//           state: "pageCollapse",
//           views: [
//             {
//               path: "/profile",
//               name: "Profile",
//               icon: <PersonIcon color="inherit" />,
//               secondaryNavbar: true,
//               component: Profile,
//               layout: "/admin",
//             },
//           ],
//         },
//       ]
//     : [
//         {
//           path: "/dashboard",
//           name: "Dashboard",
//           icon: <HomeIcon color="inherit" />,
//           component: Dashboard,
//           layout: "/admin",
//         },
//         {
//           path: "/activity",
//           name: "Activity",
//           icon: <StatsIcon color="inherit" />,
//           component: Activity,
//           layout: "/admin",
//         },
//         {
//           path: "/tables",
//           name: "Tables",
//           icon: <StatsIcon color="inherit" />,
//           component: Tables,
//           layout: "/admin",
//         },
//         {
//           path: "/perfomanance d'hier",
//           name: "PerfHier",
//           icon: <CreditIcon color="inherit" />,
//           component: PerfHier,
//           layout: "/admin",
//         },
//       ];
// };
// export default dashRoutes;

// import
import React, { Component, useState } from "react";
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import PerfHier from "views/Dashboard/PerfHier";
import Activity from "views/Dashboard/Activity";
import axios from "./views/Pages/api/axios";
import Cookies from "js-cookie";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
// const [user, setUser] = useState("");
// const getUserRole = async () => {
//   const csrftoken = Cookies.get("XSRF-TOKEN");
//   axios.defaults.headers.common["X-CSRF-TOKEN"] = csrftoken;
//   console.log(axios.defaults.headers.common["X-CSRF-TOKEN"]);
//   axios
//     .post("http://localhost:8000/api/user/", { withCredentials: true })
//     .then((data) => {
//       console.log(data);
//     });
// };
// getUserRole();

const getUser = async () => {
  const { data } = await axios.get("/api/user");
  // setUser(data);
  // console.log(user);
};
getUser();
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/activity",
    name: "Activity",
    icon: <StatsIcon color="inherit" />,
    component: Activity,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/perfomanance d'hier",
    name: "PerfHier",
    icon: <CreditIcon color="inherit" />,
    component: PerfHier,
    layout: "/admin",
  },
  {
    path: "/perfomanance d'ajourdhui",
    name: "Perfomanance d'ajourdhui",
    icon: <CreditIcon color="inherit" />,
    component: PerfHier,
    layout: "/admin",
  },
  {
    path: "/Perfomanance de mois",
    name: "Perfomanance de mois",
    icon: <CreditIcon color="inherit" />,
    component: PerfHier,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      // {
      //   path: "/signup",
      //   name: "Sign Up",
      //   icon: <RocketIcon color="inherit" />,
      //   component: SignUp,
      //   layout: "/auth",
      // },
    ],
  },
];
export default dashRoutes;
