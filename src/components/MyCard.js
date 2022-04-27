import { AccessTime } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  createTheme,
  Rating,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: "10px",
            // backgroundColor:"blue"
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: "9px",
          },
        },
      ],
    },
  },
});

const MyCard = ({ tour }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Link to={`/${tour.id}`}>
          <CardMedia
            component="img"
            height="140"
            image={tour.picture}
            alt="green iguana"
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {tour.title}
          </Typography>
          <Stack direction="row">
            <AccessTime />
            <Typography
              variant="body2"
              color="text.secondary"
              marginLeft={1}
              mt={1}
            >
              {tour.hours} Hours
            </Typography>
          </Stack>
          <Stack direction="row" my={1}>
            <Rating
              name="read-only"
              value={tour.rating}
              readOnly
              size="small"
            />
            <Typography variant="body3" marginX={1} mt={0.5}>
              4.5
            </Typography>
            <Typography variant="body3" mt={0.5}>
              {tour.review}(reviews)
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography variant="h6">from</Typography>
            <Typography variant="h6" marginX={1}>
              c
            </Typography>
            <Typography variant="h6">{tour.price}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default MyCard;
