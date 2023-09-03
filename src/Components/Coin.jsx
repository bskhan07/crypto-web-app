import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  Container,
  HStack,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { server } from "../main";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import { Link } from "react-router-dom";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const Coins = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <Error mes={`404 While Fetching Coins `} />;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container py={"16"} maxW={"container.xl"} h={"100vh"}>
          <RadioGroup onChange={setCurrency} value={currency}>
            <Stack direction="row">
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR </Radio>
            </Stack>
          </RadioGroup>
          <HStack
            flexWrap={"wrap"}
            justifyContent={"center"}
            spacing={"10"}
            w={"full"}
          >
            {data.map((e) => {
              return (
                <Link to={`/coin/${e.id}`} key={e.id}>
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
                      {currencySymbol}
                      {e.current_price}
                    </Heading>
                    <Text color="#6B46C1">{e.name}</Text>
                  </VStack>
                </Link>
              );
            })}
          </HStack>
          <HStack py={"8"} justifyContent={"center"}>
            <Button
              onClick={() => setPage(page + 1)}
              colorScheme="purple"
              variant="solid"
            >
              Load More
            </Button>
          </HStack>
        </Container>
      )}
    </>
  );
};

export default Coins;
