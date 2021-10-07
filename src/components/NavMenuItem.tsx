import React from "react";
import styled from "styled-components";

interface NavMenuItemProps {
  text: string;
  src: string;
  href: string;
}

export const NavMenuItem: React.FC<NavMenuItemProps> = (props) => {
  const { text, src, href } = props;

  return (
    <Wrapper href={href}>
      <img src={src} alt="" />
      <span>{text}</span>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: flex;
  align-items: center;

  padding: 0 12px;

  cursor: pointer;

  > img {
    height: 20px;
    width: 20px;
    min-width: 20px;

    z-index: auto;
  }

  > span {
    position: relative;

    font-size: 13px;
    color: rgb(249, 249, 249);
    letter-spacing: 1.42px;
    white-space: nowrap;

    padding: 2px 0px;

    &:before {
      content: "";

      background-color: rgb(249, 249, 249);

      height: 2px;
      width: auto;

      border-radius: 0px 0px 4px 4px;

      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;

      opacity: 0;
      visibility: hidden;

      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  &:hover {
    > span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1;
    }
  }
`;
