import React from "react";
import styled from "styled-components";

export const LandingContent: React.FC = (props) => {
  return (
    <Container>
      <CTA>
        <CTATop src="/images/cta-logo-one.svg" />
        <SignUpBtn>GET ALL THERE</SignUpBtn>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTABottom src="/images/cta-logo-two.png" />
      </CTA>
      <Background />
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 650px;
  max-height: 650px;
`;

const CTATop = styled.img`
  display: block;

  width: 100%;
  max-width: 600px;
  min-height: 1px;

  margin-bottom: 12px;
`;

const SignUpBtn = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  letter-spacing: 1.5px;
  font-size: 18px;

  background-color: #0063e5;

  width: 100%;
  margin-bottom: 12px;
  padding: 16.5px 0;

  border-radius: 4px;
  border: 1px solid transparent;

  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  margin: 0 0 24px;

  line-height: 1.5;
  letter-spacing: 1.5px;
  font-size: 11px;
  color: hsla(0%, 0%, 95.3%, 1);
`;

const CTABottom = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 12px;

  display: inline-block;
  vertical-align: bottom;
`;
