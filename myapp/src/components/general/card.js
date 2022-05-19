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

const MoreCards = () => {
  const cardInfo = [
    {image: "data:image/jpeg;base64,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", 
    title: "Olivia_233", 
    subheader: "April 4, 2022", 
    content: "How often should I water my bamboo palm??? pls help!"
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
    title: "Helena K.", 
    subheader: "April 3, 2022", 
    content: "Does anyone know what soil I should use to most effectively help reduce carbon emissions? "
    }
  ];
  const renderCard = (card, index) => {
    return(
    <Card sx={{ maxWidth: 500, maxHeight: 500 }} key = {index}>
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
  return <div className='App'>
    {cardInfo.map(renderCard)}
  </div>
}
export default MoreCards;