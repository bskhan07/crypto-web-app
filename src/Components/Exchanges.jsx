import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  Container,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { server } from "../main";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";

const Exchanges = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false)

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setData(data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    };
    fetchExchanges();
  }, []);


if(error) return <Error mes={`404 While Fetching Exchanges `}/>
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container py={"16"} maxW={"container.xl"} h={"100vh"}>
          <HStack
            flexWrap={"wrap"}
            justifyContent={"center"}
            spacing={"10"}
            w={"full"}
          >
            {data.map((e) => {
              return (
                <a key={e.id} href={e.url} target="blank">
                  <VStack
                    transition={"all .5s"}
                    justifyContent={"center"}
                    py={"12"}
                    css={{
                      "&:hover": {
                        scale: "1.1",
                      },
                    }}
                    borderRadius={"lg"}
                    shadow={"xl"}
                    w={"48"}
                    h={"full"}
                  >
                    <Image w={"16"} src={e.image} />
                    <Heading fontSize={"3xl"} color="#6B46C1">
                      {e.trust_score_rank}
                    </Heading>
                    <Text color="#6B46C1">{e.name}</Text>
                  </VStack>
                </a>
              );
            })}
          </HStack>
        </Container>
      )}
    </>
  );
};

export default Exchanges;
