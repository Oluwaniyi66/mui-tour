import { Container, Grid, Typography } from "@mui/material";
import MyCard from "../components/MyCard";

import Tours from "./TourData";

function Home() {
  return (
    <div className="App">
      <Container>
        <Typography variant="h4" margin={2}>
          Top Niagra Winter Tour
        </Typography>
        <Grid container spacing={1}>
          {Tours.map((tour) => (
            <Grid item xs={12} sm={6} md={3} mb={1}>
              <MyCard tour={tour} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
