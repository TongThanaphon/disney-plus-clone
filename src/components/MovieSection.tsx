import React from "react";
import styled from "styled-components";

import { MovieCard } from "./MovieCard";

interface MovieSectionProps {
  title: string;
  movies: any[];
}

export const MovieSection: React.FC<MovieSectionProps> = (props) => {
  const { title, movies } = props;

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        {movies &&
          movies.map((item) => (
            <MovieCard key={item.id} id={item.id} image={item.cardImg} />
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
