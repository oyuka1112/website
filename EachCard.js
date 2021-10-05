import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import '../pages/Box.css';
import { Icon } from '@iconify/react';
function EachCard({ text, title }) {
  return (
    
    <Card >
      <CardActionArea >
        <CardContent className = "color">
          <Typography variant="h5" component="h2">
            Title {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className = "color"> {/*className = "color"> */}
        <Button size="small" color="primary">
          Comment
        </Button>
        <Button>
        <Icon icon="fa-solid:arrow-circle-up" /></Button>
        <Button>
        <Icon icon="fa-solid:arrow-circle-down" /></Button>
       
         </CardActions>
          
        {/* <Button size="small" color="primary">
          Decrease
        </Button> */}
      
    </Card>
    
  );
}

export default EachCard;
