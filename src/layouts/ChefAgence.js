import React from "react";
import { Route, Switch } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "components/Sidebar/Sidebar";
import HeaderLinks from "components/Navbars/AdminNavbarLinks";
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import PerfHier from "views/Dashboard/PerfHier";

function ChefAgenceLayout() {
  return (
    <Flex>
      <Sidebar />

      <Box flex="1">
        <HeaderLinks />

        <Box p="4">
          <Switch>
            <Route path={`/chefagence/dashboard`} component={Dashboard} />
            <Route path={`/chefagence/tables`} component={Tables} />
            <Route path={`/chefagence/PerfHier`} component={PerfHier} />
          </Switch>
        </Box>
      </Box>
    </Flex>
  );
}

export default ChefAgenceLayout;
