import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import prsLogo from '../../assets/Play_Store_logo.png';
import './styles.css';

const Course = props => {
  return (
    <div>
      {props.course ? (
        <Card className="card">
          <CardMedia
            className="card-media"
            image={prsLogo}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h3" className='service-headline'>
              {props.course.headline}
            </Typography>
            <Typography component="p" className='service-name'>
              {props.course.name}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};
export default Course;
