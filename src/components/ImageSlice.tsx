import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliceProps {
  items: string[];
}

export const ImageSlice: React.FC<ImageSliceProps> = (props) => {
  const { items } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {items.map((item, index) => (
        <Card key={index}>
          <CardContent>
            <img src={item} alt="" />
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  > button {
    height: 100%;
    width: 5vw;

    z-index: 1;

    opacity: 0;

    &:hover {
      opacity: 1;

      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: #f9f9f9;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Card = styled.div`
  cursor: pointer;
`;

const CardContent = styled.a`
  display: block;

  border-radius: 4px;

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  padding: 0 4px;

  img {
    height: 100%;
    width: 100%;

    border-radius: 4px;
  }

  &:hover {
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition-duration: 300ms;
  }
`;
