import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Grid from '@mui/material/Grid';

const MoreCards = () => {
  const cardInfo = [
    {image: "https://thumbs.dreamstime.com/b/basil-plant-28045356.jpg", 
    title: "Olivia_233", 
    subheader: "April 4, 2022", 
    content: "How often should I water my bamboo palm??? pls help! Also looking for good bamboo tips!"
    },

    {image: "https://jasonsgreenhouse.com/wp-content/uploads/2017/02/neslihan-gunaydin-3493-1-1080x675.jpg",
    title: "Helena K.", 
    subheader: "April 3, 2022", 
    content: "Does anyone know what soil I should use to most effectively help reduce carbon emissions? "
    },

    {image: "https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/sunflower-1627193_1920.jpg?itok=3ncNl6ha",
    title: "TTK_shaw", 
    subheader: " April 1, 2022", 
    content: "Has anyone tried using eggshell as a seedling planter? I saw this hack online and am hoping to try it out! "
    },

    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZTj3Ufq4ymW4B1bELqOXgfO-6UpEGmo7_g&usqp=CAU",
    title: "Louie Shark", 
    subheader: "March 26, 2022", 
    content: "How often should I water my bamboo palm??? pls help! "
    },

    {image: "https://cdn.apartmenttherapy.info/image/upload/v1591493353/gen-workflow/product-listing/chinesemoneyamz.jpg",
    title: "Julia Graj", 
    subheader: "March 26, 2022", 
    content: "How often should I water my bamboo palm??? pls help! "
    },

    {image: "https://bingvsdevportalprodgbl.blob.core.windows.net/demo-images/c47b0684-2025-4613-97b8-ead923217f6b.jpg",
    title: "Julia Graj", 
    subheader: "March 26, 2022", 
    content: "How often should I water my bamboo palm??? pls help! "
    }
  ];
  const renderCard = (card) => {
    return(
        <Card sx={{ maxWidth: 500, maxHeight: 500 }} >
          <CardMedia
            component="img"
            height="194"
            src = {card.image}
          />
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500], height: 50, width: 50}}>
                R
              </Avatar>
            }
            title= {card.title}
            subheader={card.subheader}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            {card.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
    )
  }
  return <div>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {cardInfo.map((card_info) => (
        <Grid item xs={2} sm={4} md={4}>
          {renderCard(card_info)}
        </Grid>
      ))}
    </Grid>
  </div>
}
export default MoreCards;