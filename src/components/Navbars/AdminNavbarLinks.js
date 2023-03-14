// Chakra Icons
import { BellIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Chakra Imports
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "components/Icons/Icons";
import Logolve from "assets/img/avatars/lavoie.png";
// Custom Components
import { ItemContent } from "components/Menu/ItemContent";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";

export default function HeaderLinks(props) {
  // const [name, setName] = useState('');
  const history = useHistory();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await axios.get("user");
  //       setName(data.name);
  //     } catch (e) {
  //       history.push("/login");
  //     }
  //   })();
  // }, []);

  const logout = async () => {
    await axios.post("logOut", {}, { withCredentials: true });
    history.push("/login");
  };

  // rest of the component code

  const {
    variant,
    children,
    fixed,
    scrolled,
    secondary,
    onOpen,
    ...rest
  } = props;

  const { colorMode } = useColorMode();

  // Chakra Color Mode
  let navbarIcon =
    fixed && scrolled
      ? useColorModeValue("gray.700", "gray.200")
      : useColorModeValue("white", "gray.200");
  let menuBg = useColorModeValue("white", "navy.800");
  if (secondary) {
    navbarIcon = "white";
  }
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
       {/* <Text display={{ sm: "none", md: "flex" }}>{name}</Text> */}
      <SearchBar me="18px" />
      <NavLink to="/auth/signin">
        <Button
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="no-effects"
          rightIcon={
            document.documentElement.dir ? (
              ""
            ) : (
              <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
            )
          }
          leftIcon={
            document.documentElement.dir ? (
              <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
            ) : (
              ""
            )
          }
          onClick={logout}
        >
          <Text display={{ sm: "none", md: "flex" }}>Logout</Text>
        </Button>
      </NavLink>
      <SidebarResponsive
        hamburgerColor={"white"}
        logo={
          <Stack direction="row" spacing="12px" align="center" justify="center">
            {Logolve}
            <Box w="1px" h="20px" />
            {Logolve}
          </Stack>
        }
        colorMode={colorMode}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />
      <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="16px"
        onClick={props.onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      />
      <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} w="18px" h="18px" />
        </MenuButton>
        <MenuList p="16px 8px" bg={menuBg}>
          <Flex flexDirection="column">
            {/* <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="13 minutes ago"
                info="from Alicia"
                boldInfo="New Message"
                aName="Alicia"
                aSrc={avatar1}
              />
            </MenuItem>
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="2 days ago"
                info="by Josh Henry"
                boldInfo="New Album"
                aName="Josh Henry"
                aSrc={avatar2}
              />
            </MenuItem>
            <MenuItem borderRadius="8px">
              <ItemContent
                time="3 days ago"
                info="Payment succesfully completed!"
                boldInfo=""
                aName="Kara"
                aSrc={avatar3}
              />
            </MenuItem> */}
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}

// // Chakra Icons
// import { BellIcon } from "@chakra-ui/icons";
// import { useHistory } from "react-router-dom";
// import { useState } from "react";
// // Chakra Imports
// import {
//   Box,
//   Button,
//   Flex,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   Stack,
//   Text,
//   useColorMode,
//   useColorModeValue,
// } from "@chakra-ui/react";
// // Assets
// import avatar1 from "assets/img/avatars/avatar1.png";
// import avatar2 from "assets/img/avatars/avatar2.png";
// import avatar3 from "assets/img/avatars/avatar3.png";
// // Custom Icons
// import { ProfileIcon, SettingsIcon } from "components/Icons/Icons";
// import Logolve from "assets/img/avatars/lavoie.png";
// // Custom Components
// import { ItemContent } from "components/Menu/ItemContent";
// import { SearchBar } from "components/Navbars/SearchBar/SearchBar";
// import { SidebarResponsive } from "components/Sidebar/Sidebar";
// import React from "react";
// import { NavLink } from "react-router-dom";
// import routes from "routes.js";

// export default function HeaderLinks(props) {
//   const history = useHistory();
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem("token") ? true : false
//   );

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     history.push("/auth/signin");
//   };
//   const {
//     variant,
//     children,
//     fixed,
//     scrolled,
//     secondary,
//     onOpen,
//     ...rest
//   } = props;

//   const { colorMode } = useColorMode();

//   // Chakra Color Mode
//   let navbarIcon =
//     fixed && scrolled
//       ? useColorModeValue("gray.700", "gray.200")
//       : useColorModeValue("white", "gray.200");
//   let menuBg = useColorModeValue("white", "navy.800");
//   if (secondary) {
//     navbarIcon = "white";
//   }
//   return (
//     <Flex
//       pe={{ sm: "0px", md: "16px" }}
//       w={{ sm: "100%", md: "auto" }}
//       alignItems="center"
//       flexDirection="row"
//     >
//       <SearchBar me="18px" />
//       <NavLink to="/auth/signin">
//         <Button
//           ms="0px"
//           px="0px"
//           me={{ sm: "2px", md: "16px" }}
//           color={navbarIcon}
//           variant="no-effects"
//           rightIcon={
//             document.documentElement.dir ? (
//               ""
//             ) : (
//               <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
//             )
//           }
//           leftIcon={
//             document.documentElement.dir ? (
//               <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
//             ) : (
//               ""
//             )
//           }
//           onClick={isLoggedIn ? handleLogout : null}
//         >
//           <Text display={{ sm: "none", md: "flex" }}>
//             {isLoggedIn ? "Logout" : "Login"}
//           </Text>
//         </Button>
//       </NavLink>
//       <SidebarResponsive
//         hamburgerColor={"white"}
//         logo={
//           <Stack direction="row" spacing="12px" align="center" justify="center">
//             {Logolve}
//             <Box w="1px" h="20px" />
//             {Logolve}
//           </Stack>
//         }
//         colorMode={colorMode}
//         secondary={props.secondary}
//         routes={routes}
//         {...rest}
//       />
//       <SettingsIcon
//         cursor="pointer"
//         ms={{ base: "16px", xl: "0px" }}
//         me="16px"
//         onClick={props.onOpen}
//         color={navbarIcon}
//         w="18px"
//         h="18px"
//       />
//       <Menu>
//         <MenuButton>
//           <BellIcon color={navbarIcon} w="18px" h="18px" />
//         </MenuButton>
//         <MenuList p="16px 8px" bg={menuBg}>
//           <Flex flexDirection="column">
//             <MenuItem borderRadius="8px" mb="10px">
//               <ItemContent
//                 time="13 minutes ago"
//                 info="from Alicia"
//                 boldInfo="New Message"
//                 aName="Alicia"
//                 aSrc={avatar1}
//               />
//             </MenuItem>
//             <MenuItem borderRadius="8px" mb="10px">
//               <ItemContent
//                 time="2 days ago"
//                 info="by Josh Henry"
//                 boldInfo="New Album"
//                 aName="Josh Henry"
//                 aSrc={avatar2}
//               />
//             </MenuItem>
//             <MenuItem borderRadius="8px">
//               <ItemContent
//                 time="3 days ago"
//                 info="Payment succesfully completed!"
//                 boldInfo=""
//                 aName="Kara"
//                 aSrc={avatar3}
//               />
//             </MenuItem>
//           </Flex>
//         </MenuList>
//       </Menu>
//     </Flex>
//   );
// }
