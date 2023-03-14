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

  const [lieu, setLieu] = useState("");
  const [matricule, setMatricule] = useState("");
  const [status, setStatus] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  const styles = {
    form: {
      display: "inline-block",
      flexDirection: "column",
      align: "center",
      fontFamily: "montserrat",
      fontWeight : "bold",
    },
    label: {
      display: "inline-block",
      flexDirection: "column",
      marginBottom: "0rem",
      
    },
    input: {
      padding: "0.5rem",
      marginLeft: "10px",
      marginRight: "20px",
      marginTop: "0.5rem",
      borderRadius: "0.25rem",
      border: "1px solid #ccc",
      fontSize: "1rem",
      "&:focus": {
        outline: "none",
        borderColor: "blue",
      },
    },
    select: {
      padding: "0.5rem",
      marginLeft: "10px",
      marginRight: "20px",
      marginTop: "0.5rem",
      borderRadius: "0.25rem",
      border: "1px solid #ccc",
      fontSize: "1rem",
      "&:focus": {
        outline: "none",
        borderColor: "blue",
      },
    },
    button: {
      marginTop: "1rem",
      padding: "0.5rem 3rem",
      borderRadius: "0.25rem",
      border: "none",
      backgroundColor: "orange",
      color: "white",
      fontSize: "1rem",
      "&:hover": {
        cursor: "pointer",
        opacity: "0.8",
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onFilterSubmit(filterData);
    setFilteredData(
      tablesProjectData.filter(
        (elem) =>
          elem.lieu === lieu ||
          elem.status === status ||
          elem.matricule === matricule.toUpperCase()
      )
    );
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
              <center>
                <form style={styles.form} onSubmit={handleSubmit}>
                  <label style={styles.label}>
                    Lieu:
                    <input
                      style={styles.input}
                      type="text"
                      name="lieu"
                      value={lieu}
                      onChange={(e) => setLieu(e.currentTarget.value)}
                    />
                  </label>

                  <label style={styles.label}>
                    Matricule:
                    <input
                      style={styles.input}
                      type="text"
                      name="matricule"
                      value={matricule}
                      onChange={(e) => setMatricule(e.currentTarget.value)}
                    />
                  </label>

                  <label style={styles.label}>
                    Statut:
                    <select
                      style={styles.select}
                      name="status"
                      value={status}
                      onChange={(e) => setStatus(e.currentTarget.value)}
                    > <option value="">-------</option>
                      <option value="Non Connecté">Non Connecté</option>{" "}
                      <option value="Connecté">Connecté</option>
                    </select>
                  </label>
                  <button onClick={() => handleSubmit()} style={styles.button}>
                    Filter
                  </button>
                </form>
              </center>{" "}
            </Card>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
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
              {filteredData
                ? filteredData.map((row, index, arr) => {
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
                  })
                : tablesProjectData.map((row, index, arr) => {
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
              {}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
