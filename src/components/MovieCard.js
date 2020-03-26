import React from "react";
// DON'T FORGET TO IMPORT EACH COMPONENT FROM REACTSTRAP!
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";

//import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";

const MovieCard = ({ film }) => {
  return (
    <Col sm="12" md={{ size: 6 }}>
      <Card>
        <CardHeader>{film.title}</CardHeader>
        <CardBody>
          <CardText>{film.description}</CardText>
          <CardText>{film.director}</CardText>
          <CardText>{film.release_date}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MovieCard;

// PREVIOUS implementation
// const film = props.film;
// const { film } = props;
// console.log("film", film);
// return (
//   <div>
//     <h2>Film title: {film.title}</h2>
//     <p>{film.description}</p>
//     <div>
//       <p>Director: {film.director}</p>
//       <p>Release Date: {film.release_date}</p>
//     </div>
//   </div>
// );

// An Example Card from Reactstrap, used for reference below
//   <Card>
//   <CardHeader>Header</CardHeader>
//   <CardBody>
//     <CardTitle>Special Title Treatment</CardTitle>
//     <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//     <Button>Go somewhere</Button>
//   </CardBody>
//   <CardFooter>Footer</CardFooter>
// </Card>

// <Col xs="6" md="4" xl="3">
//   {
/*Size of Col per screen width breakpoints from Bootstrp Grid dimensions
      There are 12 total columns per row. a xs="6" means that at the smallest width 
      of you screen, each card will be the width of 6 columns. Since there are 
      12 total columns, 12/6 = 2 cards per row.
      
      for half desktop or tablet  => 12/4 = 3 cards per row
      
      // for desktop view => 12/3 = 4 cards per row*/
//}
//   <Card>
//     <CardHeader>{film.title}</CardHeader>
//     <CardBody>
//       <CardText>{film.description}</CardText>
//       <CardText>{film.director}</CardText>
//       <CardText>{film.release_date}</CardText>
//     </CardBody>
//   </Card>
// </Col>
