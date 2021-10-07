import React from "react";
import styled from "styled-components";

interface UserMenuProps {
  photo: string;
  onSignOut: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = (props) => {
  const { photo, onSignOut } = props;

  return (
    <Container>
      <UserImage src={photo} />
      <DropDown>
        <span onClick={onSignOut}>Sign out</span>
      </DropDown>
    </Container>
  );
};

const UserImage = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;

  width: 100px;

  background: rgb(19, 19, 19);

  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;

  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;

  font-size: 14px;
  letter-spacing: 3px;

  padding: 10px;

  opacity: 0;
`;

const Container = styled.div`
  height: 48px;
  width: 48px;

  cursor: pointer;

  position: relative;

  &:hover {
    ${DropDown} {
      opacity: 1;
    }
  }
`;
