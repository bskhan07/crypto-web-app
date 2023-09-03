import {
  Button,
  DrawerFooter,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        borderRadius={"50%"}
        onClick={onOpen}
        zIndex={"99"}
        colorScheme={"purple"}
        pos={"fixed"}
        p={"1"}
        left={"4"}
        top={"4"}
      >
        <BiMenuAltLeft fontSize={"18"} />
      </Button>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack w={"full"} justifyContent={"center"} h={"full"} gap={"25"}>
              <Button colorScheme={"purple"} onClick={onClose} variant={"link"}>
                {" "}
                <Heading fontSize={"2xl"}>
                  <Link to={"/"}> Home</Link>
                </Heading>
              </Button>
              <Button colorScheme={"purple"} onClick={onClose} variant={"link"}>
                {" "}
                <Heading fontSize={"2xl"}>
                  <Link to={"/coins"}> Coins</Link>
                </Heading>
              </Button>
              <Button colorScheme={"purple"} onClick={onClose} variant={"link"}>
                {" "}
                <Heading fontSize={"2xl"}>
                  <Link to={"/exchanges"}> Exchanges</Link>
                </Heading>
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <HStack w={"full"} spacing={"5"} justifyContent={"center"}>
              <Button colorScheme="purple">
                <a target="blank" href="https://github.com/bskhan07">
                  <AiFillGithub />
                </a>
              </Button>
              <Button colorScheme="purple">
                <a
                  target={"blank"}
                  href="https://www.linkedin.com/in/basharat-khan-495baa20a/"
                >
                  <BsLinkedin />
                </a>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
