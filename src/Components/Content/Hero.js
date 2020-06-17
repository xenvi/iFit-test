import React from 'react';
import styled from "styled-components";

// Image files
import LandingBg from "../../Images/gmapsinworkout.jpg";

const Wrapper = styled.section`
    position: relative;
    width: 100%;
    height: 801px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
`;
const LandingImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${LandingBg}) center/cover no-repeat;
    opacity: 0.79;
`;
const LandingText = styled.div`
    width: 984px;
    color: #fff;
    font: 600 72px/90px "Proxima Nova Lt";
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1;
`;
const Button = styled.button`
    margin-top: 56px;
    width: 392px;
    height: 56px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.24), 0 0 1px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    background-color: #0069d2;
    font: 700 14px/16px "Proxima Nova Rg";
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #fff;
    border: none;
    cursor: pointer;
    z-index: 1;
    transition: 0.3s ease-in-out;
    &:focus {
        outline: none;
    }
    &:hover {
        background: #00478f;
        transition: 0.3s ease-in-out;
    }
`;

function Hero() {
    return (
    <Wrapper>
        <LandingImage />
        <LandingText><p>The best personal training, right in your own home</p></LandingText>
        <Button><p>JOIN IFIT COACH</p></Button>
    </Wrapper>
    );
  }

export default Hero