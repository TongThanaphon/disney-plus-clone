import React from "react";
import styled from "styled-components";

interface VideoCardProps {
  image: string;
  video: string;
}

export const VideoCard: React.FC<VideoCardProps> = (props) => {
  const { image, video } = props;

  return (
    <Card>
      <img src={image} alt="" />
      <video autoPlay={true} loop={true} playsInline={true}>
        <source src={video} type="video/mp4" />
      </video>
    </Card>
  );
};

const Card = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;

  position: relative;

  padding-top: 56.25%;

  cursor: pointer;

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  overflow: hidden;

  img {
    display: block;

    position: absolute;
    inset: 0;
    z-index: 1;

    height: 100%;
    width: 100%;

    object-fit: cover;
  }

  video {
    position: absolute;
    inset: 0;
    z-index: 0;

    width: 100%;
    height: 100%;

    opacity: 0;

    border-radius: 10px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;
