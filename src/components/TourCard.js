import React from "react";
import Card from '@mui/material/Card';
import Grid  from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { Box } from "@mui/material";
import { createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme ({
     components : {
          MuiTypography:{
               variants:[ {
                    props: {
                         variant: 'body2',

                         },
                         style: {
                              fontSize: 11,
                         },
                    },
                    {
                         props: {
                              variant: 'body3',
     
                              },
                              style: {
                                   fontSize: 9,
                              },
                         },
                    
               ]
          }
     }
})

const TourCard = ({tour}) => {
     return (
          <Grid item xs={3}>
          <ThemeProvider theme={theme}>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={tour.image}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="h2">
        {tour.name}
        </Typography>
        <Box sx={{
               display: 'flex',
               alignItems: 'center'
            }}>
        <AccessTime  sx={{width: 12.5}}/>
        <Typography variant="body2" component="p" marginLeft={0.5}>
          {tour.duration} hours
        </Typography>
        </Box>
        <Box  sx={{
               display: 'flex',
               alignItems: 'center'
            }}
            marginTop={3}>
            <Rating name="read-only" value={tour.rating} readOnly precision={0.5}/>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.rating}
            </Typography>
            <Typography variant="body3" component="p" marginLeft={0.5}>
            ({tour.numberOfReviews} reviews)
            </Typography>
        </Box>
        <Box>
        <Typography variant="h6" component="h3" marginTop={0}>
               From C ${tour.price}
            </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
     </Card>
          </ThemeProvider>
          </Grid>
          
     );
}

export default TourCard;