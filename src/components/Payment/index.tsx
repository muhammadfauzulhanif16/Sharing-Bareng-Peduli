import { Box, Container, Grid, Heading, Image, Stack } from "@chakra-ui/react";

import ATMBersama from "../../images/payment/ATMBersama.png";
import BCA from "../../images/payment/BCA.png";
import BNI from "../../images/payment/BNI.png";
import Dana from "../../images/payment/Dana.png";
import Gopay from "../../images/payment/Gopay.png";
import LinkAja from "../../images/payment/LinkAja.png";
import Ovo from "../../images/payment/Ovo.png";

export const Payment = () => {
  const payments = [
    { name: "ATM Bersama", img: `${ATMBersama}` },
    { name: "BCA", img: `${BCA}` },
    { name: "BNI", img: `${BNI}` },
    { name: "Dana", img: `${Dana}` },
    { name: "Gopay", img: `${Gopay}` },
    { name: "LinkAja", img: `${LinkAja}` },
    { name: "Ovo", img: `${Ovo}` },
  ];
  return (
    <Box p={10}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Mitra Pembayaran</Heading>
      </Stack>

      <Grid templateColumns="repeat(7, 1fr)" gap={6}>
        {payments.map((payment) => {
          return (
            <Image
              alt={`${payment.name}'s icon`}
              src={payment.img}
              title={payment.name}
            />
          );
        })}
      </Grid>
    </Box>
  );
};