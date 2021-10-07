import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { ButtonGroup } from "../components/ButtonGroup";

import db from "../firebase";

type DetailParams = {
  id: string;
};

const DetailPage: React.FC = () => {
  const { id } = useParams<DetailParams>();
  const [detailData, setDetailData] = useState<any>({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, [id]);

  return (
    <Container>
      {detailData && (
        <>
          <Background>
            <img src={detailData.backgroundImg} alt="" />
          </Background>

          <ImageTitle>
            <img src={detailData.titleImg} alt="" />
          </ImageTitle>

          <Content>
            <ButtonGroup />
            <SubTitle>{detailData.subTitle}</SubTitle>
            <Description>{detailData.description}</Description>
          </Content>
        </>
      )}
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  display: block;

  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);

  overflow-x: hidden;

  position: relative;
  top: 72px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  opacity: 0.8;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  height: 30vw;
  min-height: 170px;
  width: 100%;

  margin: 0 auto;
  padding-bottom: 24px;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const Content = styled.div`
  max-width: 874px;
`;

const SubTitle = styled.p`
  margin: 0;

  color: rgb(249, 249, 249);
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  margin: 0;
  padding: 16px 0;

  font-size: 20px;
  line-height: 1.4;

  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
