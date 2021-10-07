import React from "react";
import styled from "styled-components";

import { VideoCard } from "./VideoCard";

const ViwerItems = [
  {
    image: "/images/viewers-disney.png",
    video: "/videos/1564674844-disney.mp4",
  },
  {
    image: "/images/viewers-pixar.png",
    video: "/videos/1564676714-pixar.mp4",
  },
  {
    image: "/images/viewers-marvel.png",
    video: "/videos/1564676115-marvel.mp4",
  },
  {
    image: "/images/viewers-starwars.png",
    video: "/videos/1608229455-star-wars.mp4",
  },
  {
    image: "/images/viewers-national.png",
    video: "/videos/1564676296-national-geographic.mp4",
  },
];

export const Viewer: React.FC = () => {
  return (
    <Container>
      {ViwerItems.map((item, index) => (
        <VideoCard key={index} {...item} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;

  margin-top: 30px;
  padding: 30px 0px 26px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
