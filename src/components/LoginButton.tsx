import React from "react";
import styled from "styled-components";

interface LoginButtonProps {
  onClick: () => void;
}

export const LoginButton: React.FC<LoginButtonProps> = (props) => {
  const { onClick } = props;

  return <Button onClick={onClick}>login</Button>;
};

const Button = styled.a`
  background-color: rgba(0, 0, 0, 0.6);

  padding: 8px 16px;

  letter-spacing: 1.5px;
  text-transform: uppercase;

  border: 1px solid #f9f9f9;
  border-radius: 4px;

  transition: all 0.2s ease 0s;

  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
