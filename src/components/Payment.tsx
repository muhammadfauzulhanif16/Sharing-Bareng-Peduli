import { Box, Container, Heading, Image, Grid, Stack } from "@chakra-ui/react";
import ATM from "../img/payment/ATM_Bersama.png";
import BCA from "../img/payment/BCA.png";
import BNI from "../img/payment/BNI.png";
import Dana from "../img/payment/Dana.png";
import Gopay from "../img/payment/Gopay.png";
import LinkAja from "../img/payment/LinkAja.png";
import Ovo from "../img/payment/Ovo.png";

export const Payment = () => {
  const payments = [
    { name: "ATM Bersama", img: `${ATM}` },
    { name: "BCA", img: `${BCA}` },
    { name: "BNI", img: `${BNI}` },
    { name: "Dana", img: `${Dana}` },
    { name: "Gopay", img: `${Gopay}` },
    { name: "LinkAja", img: `${LinkAja}` },
    { name: "Ovo", img: `${Ovo}` },
  ];
  return (
    <Box p={4}>
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