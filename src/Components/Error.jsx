import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const Error = ({mes}) => {
  return (
    <>
    <Stack w={"full"} justifyContent={"center"} alignItems={"center"} h={"100vh"} > 
        <Heading color={"#6B46C1"}>{mes}</Heading>
    </Stack>
    </>
  )
}

export default Error