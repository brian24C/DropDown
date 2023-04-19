import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Heading } from "@chakra-ui/react";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Heading>FILTER EMPLOYEES</Heading>
      <h1>Welcome</h1>
    </HStack>
  );
};

export default NavBar;
