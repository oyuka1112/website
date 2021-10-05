import React, { Fragment } from "react";
import { Button, Grid } from "@material-ui/core";
import EachCard from "../CardTemplate/EachCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import './Box.css';
function News() {
  const cardInfo = [
    {title: "title 1", text: " text 1 "},
    {title: "title 2", text: " text 2"},
    {title: "title 3", text: " text 3 "},
    {title: "title 4", text: "  text 4 "},
    {title: "title 5", text: " text 5  "},
    {title: "title 6", text: " text 6  "},
  ];
  const renderCard = (card, index ) =>{
  return (
    // <Grid container spacing={3}>
    //         <Grid item xs={12} sm={4}>
    //           <EachCard />
    //         </Grid>
    //       </Grid>

    <Card key ={index} className = "box">
  <Card.Header className="color">Featured</Card.Header>
  <Card.Body className="color">
    <Card.Title styles= {{justifyContent: "center" }} >{card.title}</Card.Title>
    <Card.Text styles= {{justifyContent: "center"}}>
      {card.text}
    </Card.Text>
    <Button variant="primary" styles = {{justifyContent: "center"}}>Read more</Button>
  </Card.Body>
</Card>
  )
}

return <div className = "grid">
  {cardInfo.map(renderCard)} </div>
}

export default News;
