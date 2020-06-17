import React from 'react';
import styled from "styled-components";

// Image files
import TreadmillSvg from '../../Images/Treadmill.svg';
import BikeSvg from '../../Images/Bike.svg';
import EllipticalSvg from '../../Images/Elliptical.svg';
import StrengthSvg from '../../Images/Strength.svg';

const Wrapper = styled.section`
    width: 100%;
    height: 382px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font: 600 24px/28px "Proxima Nova Lt";
    margin: 75px 0 50px 0;
`;
const Text = styled.p`
    opacity: 0.8;
    color: #34383c;
    letter-spacing: 0.3px;
`;
const Container = styled.div`
    width: 1392px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 24px 0 50px 0;
`;
const Card = styled.div`
    width: 330px;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
    border-radius: 4px;
    background-color: #fff;
    font: 700 24px/28px "Proxima Nova Rg";
`;
const CardText = styled.p`
    opacity: 0.8;
    color: #2e3134;
    letter-spacing: 0.3px;
`;
const CardImg = styled.img``;

function Equipment() {
    return (
    <Wrapper>
        <Text>Interested in our exciting iFit-enabled equipment?</Text>
        <Container>
            <Card>
                <CardImg src={TreadmillSvg} alt="Treadmill"></CardImg>
                <CardText>Treadmills</CardText>
            </Card>
            <Card>
                <CardImg src={BikeSvg} alt="Bikes"></CardImg>
                <CardText>Bikes</CardText>
            </Card>
            <Card>
                <CardImg src={EllipticalSvg} alt="Ellipticals"></CardImg>
                <CardText>Ellipticals</CardText>
            </Card>
            <Card>
                <CardImg src={StrengthSvg} alt="Strength"></CardImg>
                <CardText>Strength</CardText>
            </Card>
        </Container>
    </Wrapper>
    );
  }

export default Equipment