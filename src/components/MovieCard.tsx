import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface MovieCardProps {
  image: string;
  id: string;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { image, id } = props;

  return (
    <Link to={`/detail/${id}`}>
      <Card>
        <img src={image} alt="" />
      </Card>
    </Link>
  );
};

const Card = styled.div`
  padding-top: 56.25%;

  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  overflow: hidden;

  position: relative;

  cursor: pointer;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    display: block;

    position: absolute;
    inset: 0;
    z-index: 1;

    object-fit: cover;

    width: 100%;
    height: 100%;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);

    border-color: rgba(249, 249, 249, 0.8);
  }
`;
