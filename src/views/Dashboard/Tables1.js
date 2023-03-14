// Chakra imports
import {
  Flex,
  Table,
  Button,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
// Custom components

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import React from "react";
import { tablesProjectData, tablesTableData } from "variables/general";
import FilterForm from "components/Tables/FilterForm";
function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [filterData, setFilterData] = useState({
    lieu: "",
    matricule: "",
    status: "",
  });

  const handleChange = (e) => {
    setFilterData({
      ...filterData,
      [e.target.matricule]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterSubmit(filterData);
  };

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              Projects Table
            </Text>
            <Card>
              {" "}
              <form onSubmit={handleSubmit}>
                <label>
                  Lieu:
                  <input
                    type="text"
                    name="lieu"
                    value={filterData.lieu}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Matricule:
                  <input
                    type="text"
                    name="matricule"
                    value={filterData.matricule}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Statut:
                  <select
                    name="status"
                    value={filterData.status}
                    onChange={handleChange}
                  >
                    <option value="">Working</option>
                    <option value="Done">Done</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <button
                  p="10px"
                  bg="red.700"
                  color="white"
                  onClick={() => handleSubmit()}
                >
                  Filter
                </button>
              </form>{" "}
            </Card>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table id="t" variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px">
                <Th pl="0px" color="gray.400" borderColor={borderColor}>
                  Livreur
                </Th>
                <Th color="gray.400" borderColor={borderColor}>
                  Lieu
                </Th>
                <Th color="gray.400" borderColor={borderColor}>
                  Livrer
                </Th>
                <Th color="gray.400" borderColor={borderColor}>
                  Non livrer
                </Th>
                <Th color="gray.400" borderColor={borderColor}>
                  Retour
                </Th>
                <Th color="gray.400" borderColor={borderColor}>
                  Status
                </Th>
                <Th color="gray.400" borderColor={borderColor}>
                  Completion
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesProjectData.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                    name={row.name}
                    status={row.status}
                    matricule={row.matricule}
                    lieu={row.lieu}
                    livrer={row.livrer}
                    nonLivrer={row.nonLivrer}
                    retour={row.retour}
                    progression={row.progression}
                    telephone={row.telephone}
                    isLast={index === arr.length - 1 ? true : false}
                    key={index}
                    id={row.matricule}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
