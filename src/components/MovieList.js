import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films/")
      .then(response => {
        setFilms(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <Container>
      {/* To create a grid:
      - include both Container and Row components 
      - all cards will have a Col
      - the size of each Col (see MovieCard), will determine
    the number of Cols per Row DYNAMICALLY */}
      <Row>
        {films.map(film => {
          return <MovieCard film={film} key={film.id} />;
        })}
      </Row>
    </Container>
  );
}
