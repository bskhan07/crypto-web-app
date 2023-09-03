import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Home = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
      >
        <Box w={"full"} h={"100vh"}>
          <Image h={"full"} w={"full"} objectFit={"cover"} src={img1} />
          <Heading
            fontSize={"5xl"}
            pos={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%,-50%)"}
            textTransform={"uppercase"}
            color={"#6B46C1"}
            bgColor={"whiteAlpha.900"}
            px={"6"}
            py={"3"}
          >
            The Future is Now
          </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
          <Image h={"full"} w={"full"} objectFit={"cover"} src={img4} />
          <Heading
            fontSize={"5xl"}
            pos={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%,-50%)"}
            textTransform={"uppercase"}
            color={"#6B46C1"}
            bgColor={"whiteAlpha.900"}
            px={"6"}
            py={"3"}
          >
            The Chain of Innovation
          </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
          <Image h={"full"} w={"full"} objectFit={"cover"} src={img2} />
          <Heading
            fontSize={"5xl"}
            pos={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%,-50%)"}
            textTransform={"uppercase"}
            color={"#6B46C1"}
            bgColor={"whiteAlpha.900"}
            px={"6"}
            py={"3"}
          >
            Unlocking the Future of Finance
          </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
          <Image h={"full"} w={"full"} objectFit={"cover"} src={img3} />
          <Heading
            fontSize={"5xl"}
            pos={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%,-50%)"}
            textTransform={"uppercase"}
            color={"#6B46C1"}
            bgColor={"whiteAlpha.900"}
            px={"6"}
            py={"3"}
          >
            Digital Currency Real Freedom
          </Heading>
        </Box>
      </Carousel>
    </>
  );
};

export default Home;
