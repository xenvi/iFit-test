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
    padding: 20px;
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
    opacity: 0;
    width: 100%;
    height: auto;
    color: #fff;
    font: 600 48px/60px "Proxima Nova Lt";
    letter-spacing: 1px;
    z-index: 1;
    transition: 0.3s ease-in-out;
    @media (min-width: 850px) {
        width: 790px;
        font: 600 60px/70px "Proxima Nova Lt";
    }
    @media (min-width: 1000px) {
        width: 984px;
        font: 600 72px/90px "Proxima Nova Lt";
    }
`;
const Button = styled.button`
    opacity: 0;
    margin-top: 56px;
    width: 100%;
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
        @media (min-width: 392px) {
            width: 392px;
        }
`;

function Hero() {
    return (
    <Wrapper>
        <LandingImage />
        <LandingText id="landingtext"><span>The best personal training, right in your own home</span></LandingText>
        <Button id="landingbtn"><p>JOIN IFIT COACH</p></Button>
    </Wrapper>
    );
  }

export default Hero