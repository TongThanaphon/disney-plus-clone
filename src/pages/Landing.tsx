import React from "react";
import styled from "styled-components";

import { LandingContent } from "../components/LandingContent";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <LandingContent />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  overflow: hidden;

  height: 100vh;
`;

export default LandingPage;
