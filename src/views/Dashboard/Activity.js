// Chakra imports
import {
  Button,
  Flex,
  Grid,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { tablesProjectData, tablesTableData } from "variables/general";
// Custom icons

import React, { useState } from "react";

const Activity = () => {
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", lg: "8fr 0fr" }}
        templateRows={{ lg: "repeat(1, auto)" }}
        gap="20px"
      >
        <SimpleGrid
          spacing={3}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {tablesProjectData.map((row, index, arr) => {
            return (
              <Card>
                <CardHeader>
                  <Heading size="md"> {row.name}</Heading>
                </CardHeader>{" "}
                <br></br>
                <CardBody>
                  <Text fontSize={"13px"}>Matricule: {row.matricule}</Text>
                  <Text fontSize={"13px"}>Telephone: {row.telephone}</Text>
                  <Text>Agence: {row.agence}</Text>
                  <Text
                    color={row.date_connec === "" ? "red.600" : "green.400"}
                    fontSize={"13px"}
                  >
                    Premier livraison: {row.date_connec} {row.heure_connec}
                  </Text>
                </CardBody>
                <br></br>
                <Button
                  color={"white"}
                  bg={row.date_connec === "" ? "red.600" : "green.400"}
                >
                  ACTIVE
                </Button>
              </Card>
            );
          })}
        </SimpleGrid>
      </Grid>
    </Flex>
  );
};

export default Activity;
