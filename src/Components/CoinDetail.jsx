import {
  Badge,
  Container,
  HStack,
  Image,
  Text,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Heading,
  RadioGroup,
  Stack,
  Radio,
  Box,
  Button,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../main";
import Loader from "./Loader";
import Error from "./Error";

const CoinDetail = () => {
  const [coinData, setCoinData] = useState({});
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState("24h");


  const btns = ["24h", "3d", "7d", "20d", "30d", "60d", "200d", "1y"];

  const changeDays = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        break;
      case "3d":
        setDays("3d");
        break;
      case "7d":
        setDays("7d");
        break;
      case "20d":
        setDays("20d");
        break;

      case "30d":
        setDays("30d");
        break;

      case "60d":
        setDays("60d");
        break;
      case "200d":
        setDays("200d");
        break;
      case "1y":
        setDays("365d");
        break;

      default:
        setDays("24h");
        break;
    }
  };
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";
  const { id } = useParams();
  useEffect(() => {
    const fetchCoinDetail = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setChartData(chartData.prices);
        setCoinData(data);
        setLoading(false);
      } catch (error) {
      }
    };

    fetchCoinDetail();
  }, [currency,days]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container pb={"5"} pt={"16"} maxW={"container.xl"}>
          <VStack alignItems={"flex-start"}>
            <Chart currencySymbol = {currencySymbol} days = {days} arr={chartData} />
            <HStack flexWrap={"wrap"} py={"6"}>
              {btns.map((e, i) => {
                return (
                  <Button
                    onClick={() => changeDays(e)}
                    key={i}
                    colorScheme="purple"
                  >
                    {e}
                  </Button>
                );
              })}
            </HStack>
            <RadioGroup onChange={setCurrency} value={currency}>
              <Stack direction="row">
                <Radio value="inr">INR</Radio>
                <Radio value="usd">USD</Radio>
                <Radio value="eur">EUR </Radio>
              </Stack>
            </RadioGroup>
            <Text w={"full"} textAlign={"center"} fontSize={"xs"}>
              Last Updated on 2023-09-02T05:57:49.292Z
            </Text>
            <VStack alignItems={"flex-start"}>
              <Image w={"20"} src={coinData.image.large} />
              <Stat>
                <StatLabel color={"#6B46C1"}>{coinData.name}</StatLabel>
                <StatNumber color={"#6B46C1"}>
                  {currencySymbol}
                  {coinData.market_data.current_price[currency]}
                </StatNumber>
                <StatHelpText color={"#6B46C1"}>
                  <StatArrow
                    type={
                      coinData.market_data
                        .price_change_percentage_24h_in_currency[currency] > 0
                        ? "increase"
                        : "decrease"
                    }
                  />
                  {
                    coinData.market_data
                      .price_change_percentage_24h_in_currency[currency]
                  }
                  %
                </StatHelpText>
              </Stat>
            </VStack>
            <Badge pb={"12"} px={"1"} width={"full"} colorScheme="purple">
              <Heading>#{coinData.market_cap_rank}</Heading>
              <Text fontSize={"20"} textAlign={"center"}>
                Current Price
              </Text>
              <Heading textAlign={"center"}>
                {currencySymbol}
                {coinData.market_data.current_price[currency]}
              </Heading>
              <VStack px={["0", "5"]} pt={"10"}>
                <MarketData
                  data={"max supply"}
                  value={coinData.market_data.max_supply}
                />
                <MarketData
                  data={"circulating supply"}
                  value={coinData.market_data.circulating_supply}
                />
                <MarketData
                  data={"market cap"}
                  value={`${currencySymbol}${coinData.market_data.market_cap[currency]}`}
                />
                <MarketData
                  data={"total volume"}
                  value={`${currencySymbol}${coinData.market_data.total_volume[currency]}`}
                />
                <MarketData
                  data={"fully diluted valuation"}
                  value={`${currencySymbol}${coinData.market_data.fully_diluted_valuation[currency]}`}
                />
                <MarketData
                  data={"All time high"}
                  value={`${currencySymbol}${coinData.market_data.ath[currency]}`}
                />
                <MarketData
                  data={"All time low"}
                  value={`${currencySymbol}${coinData.market_data.atl[currency]}`}
                />
              </VStack>
            </Badge>
          </VStack>
        </Container>
      )}
    </>
  );
};


const MarketData = ({ data, value }) => {
  return (
    <HStack w={"full"} justifyContent={"space-between"}>
      <Text
        textTransform={"uppercase"}
        fontWeight={"400"}
        fontSize={["20", "25"]}
        fontFamily={"Bebas Neue"}
      >
        {data}
      </Text>
      <Text fontSize={"20"}>{value}</Text>
    </HStack>
  );
};

export default CoinDetail;
