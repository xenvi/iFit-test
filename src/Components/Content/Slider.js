import React from 'react';
import styled from "styled-components";

// Logo imports
import GearJunkie from "../../Images/svg-logos/gear-junkie-logo.svg";
import Mashable from "../../Images/svg-logos/mashable-logo.svg";
import Wired from "../../Images/svg-logos/wired-logo.svg";
// Icon imports
import LArrow from "../../Images/LArrow.png"
import RArrow from "../../Images/RArrow.png"

const Wrapper = styled.section`
  min-width: 100%;
  height: 232px;
  border-radius: 2px;
  background-color: #f4f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
    opacity: 0.8;
    transition: 0.3s all ease-in-out;
    &:hover {
      opacity: 1;
      cursor: pointer;
      transition: 0.3s all ease-in-out;
    }
    &:focus {
      outline: none;
    }
`;
const LeftButton = styled(Button)`
    position: absolute;
    left: 16px;
`;
const RightButton = styled(Button)`
    position: absolute;
    right: 16px;
`;

function Slider() {
    return (
    <Wrapper>
      <LeftButton><img src={LArrow} alt="Left slider button" /></LeftButton>
      <Card>
          <Logo src={GearJunkie} alt="GearJunkie review"></Logo>
          <Review><span>“You focus on putting in the work, and the technology handles the rest.”</span></Review>
      </Card>
      <Card>
          <Logo src={Wired} alt="Wired review"></Logo>
          <Review><span>“Literally transports you from home to wherever you choose to run.”</span></Review>
      </Card>
      <Card>
          <Logo src={Mashable} alt="Mashable review"></Logo>
          <Review><span>“Breathes new life into a tired, old running routine.”</span></Review>
      </Card>
      
      <RightButton><img src={RArrow} alt="Right slider button" /></RightButton>
    </Wrapper>
    );
  }

export default Slider