import React from 'react';
import styled from "styled-components";

// Logo imports
import GearJunkie from "../../Images/svg-logos/gear-junkie-logo.svg";
import Mashable from "../../Images/svg-logos/mashable-logo.svg";
import Wired from "../../Images/svg-logos/wired-logo.svg";
// Icon imports
import LArrow from "../../Images/LArrow.png"
import RArrow from "../../Images/RArrow.png"

const Container = styled.section`
  min-width: 100%;
  background-color: #f4f5f7;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  height: 232px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;
const Card = styled.div`
  width: 440px;
  height: 184px;
  box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 12px;
  transition: 0.3s ease-in-out;
  &:hover {
      transform: scale(1.01);
      box-shadow: 0 7px 12px rgba(46, 49, 52, 0.3);
      cursor: pointer;
      transition: 0.3s ease-in-out;
  }
`;
const Logo = styled.img`
  margin-bottom: 16px;
`;
const Review = styled.div`
  width: 360px;
  opacity: 0.8;
  color: #2e3134;
  font: 400 16px/24px "Proxima Nova Rg";
  letter-spacing: 0.3px;
  text-align: center;
`;
const Button = styled.button`
    width: 40px;
    height: 40px;
    box-shadow: 0 7px 12px rgba(46, 49, 52, 0.3);
    border: 1px solid rgba(244, 245, 247, 0.32);
    background-color: #000c28;
    border-radius: 50%;
    opacity: 0.7;
    transition: 0.3s all ease-in-out;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
      transition: 0.3s all ease-in-out;
    }
    &:focus {
      outline: none;
    }
    @media (min-width: 600px) {
      opacity: 0.8;
      &:hover {
        opacity: 0.9;
        cursor: pointer;
        transition: 0.3s all ease-in-out;
      }
    }
`;
const LeftButton = styled(Button)`
    position: absolute;
    left: 4px;
    @media (min-width: 600px) {
      left: 16px;
    }
`;
const RightButton = styled(Button)`
    position: absolute;
    right: 4px;
    @media (min-width: 600px) {
      right: 16px;
    }
`;
const Slides = styled.div`
    display: flex;
    position: relative;
    left: 0;
    transition: 0.3s ease-in-out;
`;

function Slider() {
    return (
    <Container>
      <Wrapper id="slider">
      <Slides id="slides">
        <Card className="slide">
            <Logo src={GearJunkie} alt="GearJunkie review"></Logo>
            <Review><span>“You focus on putting in the work, and the technology handles the rest.”</span></Review>
        </Card>
        <Card className="slide active">
            <Logo src={Wired} alt="Wired review"></Logo>
            <Review><span>“Literally transports you from home to wherever you choose to run.”</span></Review>
        </Card>
        <Card className="slide">
            <Logo src={Mashable} alt="Mashable review"></Logo>
            <Review><span>“Breathes new life into a tired, old running routine.”</span></Review>
        </Card>
      </Slides>
      <LeftButton id="prev" className="control"><img src={LArrow} alt="Left slider button" /></LeftButton>
      <RightButton id="next" className="control"><img src={RArrow} alt="Right slider button" /></RightButton>
      </Wrapper>
    </Container>
    );
  }

export default Slider