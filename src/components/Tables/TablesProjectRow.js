import React, { useState } from "react";

import {
  Tr,
  Td,
  Badge,
  Flex,
  Text,
  Avatar,
  Progress,
  Icon,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

// import { FaEllipsisV } from "react-icons/fa";

// import { motion, AnimatePresence } from "framer-motion";
import { tablesProjectData } from "variables/general";
// import Overlay from "views/Dashboard/Card/Overlay";
// import Modal from "./Modal";
import PieChart from "components/Charts/PieChart";
import { pieChartData, pieChartOptions } from "components/Charts/chartData";
import Card from "components/Card/Card";
// import FilterForm from "./FilterForm";

function DashboardTableRow(props) {
  const {
    logo,
    name,
    matricule,
    status,
    lieu,
    livrer,
    nonLivrer,
    retour,
    progression,
    telephone,
    isLast,
    id,
  } = props;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const bgStatus = useColorModeValue("gray.400", "navy.900");

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [selectedInfo, setSelectedInfo] = useState(null);

  const handlePerformance = (matricule) => {
    onOpen();
    tablesProjectData
      .filter((elem) => elem.matricule === Object.values(matricule)[0])
      .map((elem) => ({
        livrer: elem.livrer,
        nonLivrer: elem.nonLivrer,
        retour: elem.retour,
      }))
      .forEach((info) => {
        pieChartData.splice(0, 3, info.livrer, info.nonLivrer, info.retour);
      });

    // pieChartData.push(info.nonLivrer, info.livrer, info.retour);
  };

  return (
    <>
      <Tr>
        <Td
          minWidth={{ sm: "250px" }}
          pl="0px"
          borderColor={borderColor}
          borderBottom={isLast ? "none" : null}
        >
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
            <Flex direction="column">
              <Text
                fontSize="md"
                color={titleColor}
                fontWeight="bold"
                minWidth="100%"
              >
                {name}
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Matricule : {matricule} <br></br>
                Tele: {telephone}
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {lieu}
          </Text>
        </Td>
        <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {livrer}
          </Text>
        </Td>
        <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {nonLivrer}
          </Text>
        </Td>
        <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {retour}
          </Text>
        </Td>
        <Td borderColor={borderColor} borderBottom={isLast ? "none" : null}>
          <Badge
            bg={status === "Connecté" ? "green.400" : "red.600"}
            color={"white"}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {status}
          </Badge>
        </Td>
        <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
          <Flex direction="column">
            <Text
              fontSize="md"
              color="blue.500"
              fontWeight="bold"
              pb=".2rem"
            >{`${progression}%`}</Text>
            <Progress
              colorScheme="blue"
              size="xs"
              value={progression}
              borderRadius="15px"
            />
          </Flex>
        </Td>
        <Td>
          <Button
            p="10px"
            bg="orange"
            color="white"
            variant={""}
            onClick={() => handlePerformance({ matricule })}
          >
            Performance
          </Button>
        </Td>
      </Tr>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="30px">
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <h1>Telephone: {telephone}</h1>
            <h1>Matricule: {matricule}</h1>
            <h2 color="green">
              <b>Casablanca Hier</b>
            </h2>
            <br />
            <Card mt="5px">
              <PieChart
                chartData={pieChartData}
                chartOptions={pieChartOptions}
              />
            </Card>{" "}
            <br />
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default DashboardTableRow;
