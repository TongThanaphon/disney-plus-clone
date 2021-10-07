import React from "react";
import styled from "styled-components";

export const ButtonGroup: React.FC = () => {
  return (
    <Container>
      <PlayButton>
        <img src="/images/play-icon-black.png" alt="" />
        <span>Play</span>
      </PlayButton>
      <TrailerButton>
        <img src="/images/play-icon-white.png" alt="" />
        <span>Trailer</span>
      </TrailerButton>
      <AddList>
        <span></span>
        <span></span>
      </AddList>
      <GroupWatchButton>
        <img src="/images/group-icon.png" alt="" />
      </GroupWatchButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  margin: 24px 0;

  min-height: 56px;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 56px;

  margin: 0px 22px 0px 0px;
  padding: 0px 24px;

  cursor: pointer;

  border: none;
  border-radius: 4px;

  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);

  font-size: 15px;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;

    padding: 0 12px;
    margin: 0px 10px 0px 0px;

    font-size: 12px;

    img {
      width: 25px;
    }
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);

  border: 1px solid rgb(249, 249, 249);
`;

const AddList = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid #f9f9f9;

  height: 44px;
  width: 44px;

  margin-right: 16px;

  background-color: rgba(0, 0, 0, 0.6);

  span {
    display: inline-block;

    background-color: rgb(249, 249, 249);

    &:first-child {
      height: 2px;
      width: 16px;

      transform: translate(1px, 0px) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;

      transform: translateX(-8px) rotate(0deg);
    }
  }
`;

const GroupWatchButton = styled.div`
  cursor: pointer;

  width: 44px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid #f9f9f9;

  background-color: #000;

  img {
    width: 100%;
  }
`;
