import {
  BottomNavigation,
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicModal from "../components/BasicModal";
import Faq from "../components/Faq";
import ImageCollage from "../components/ImageCollage";
import Tours from "./TourData";


const MyTour = () => {
  const {id}=useParams()
  const [detailsObj, setDetailsObj]=useState({})

  useEffect(()=>{
    console.log(id)
    console.log(Tours[id-1])
    setDetailsObj(Tours[id-1])

  },[id])
  return (
    <Container
      sx={{
        width: "70%",
      }}
    >
      <Typography variant="h3" my="20px">
        {detailsObj?.title}
      </Typography>
      <Stack direction="row">
        <img
          src={detailsObj.picture}
          alt=""
          height="325"
          width="70%"
        />
        <ImageCollage />
      </Stack>
      <Box>
        <Typography variant="h3">About this ticket</Typography>
        <Typography variant="body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          sit reiciendis sed qui. Dolorum excepturi aut et at vitae eos qui
          atque, totam temporibus omnis ad debitis dignissimos dolor odio.
        </Typography>
      </Box>
      <Faq />

      <Paper sx={{position:"fixed", bottom:0, left:0, right:0 }}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
        <Box />
      </Paper>
    </Container>
  );
};

export default MyTour;
