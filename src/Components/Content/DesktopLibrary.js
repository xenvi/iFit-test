import React from 'react';
import styled from "styled-components";

// Card Image files
import Desktop1 from '../../Images/Desktop1.jpg';
import Desktop2 from '../../Images/Desktop2.jpg';
import Desktop3 from '../../Images/Desktop3.jpg';
import Desktop4 from '../../Images/Desktop4.jpg';
import Desktop5 from '../../Images/Desktop5.jpg';
import Desktop6 from '../../Images/Desktop6.jpg';
import Desktop7 from '../../Images/Desktop7.jpg';
import Desktop8 from '../../Images/Desktop8.jpg';
// Avatar Image files
import Avatar1 from '../../Images/Desktop1Avatar.jpg';
import Avatar2 from '../../Images/Desktop2Avatar.jpg';
import Avatar3 from '../../Images/Desktop3Avatar.jpg';
import Avatar4 from '../../Images/Desktop4Avatar.jpg';
import Avatar5 from '../../Images/Desktop5Avatar.jpg';
import Avatar6 from '../../Images/Desktop6Avatar.jpg';
import Avatar7 from '../../Images/Desktop7Avatar.jpg';
import Avatar8 from '../../Images/Desktop8Avatar.jpg';

const Wrapper = styled.section`
    width: 100%;
    height: 584px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
`;
const Container = styled.div`
    width: 1224px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`;
const Card = styled.div`
    width: 288px;
    height: 280px;
    box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
    border-radius: 4px;
    background-color: #fff;
`;
const CardImgWrapper = styled.div`
    width: 100%;
    height: 164px;
    overflow: hidden;
`;
const CardImg = styled.img`
    min-width: 100%;
`;
const CardInfoWrapper = styled.div`
    padding: 16px;
    width: 100%;
    height: 116px;
    font: 700 16px/18px "Proxima Nova Rg";
`;
const Details = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Title = styled.p`
    color: #2e3134;
    letter-spacing: 0.3px;
`;
const Avatar = styled.img`
    width: 28px;
    height: 28px;
`;

function DesktopLibrary() {
    return (
    <Wrapper>
        <Container>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop1} alt="Card 1" />
                </CardImgWrapper>
                <CardInfoWrapper>
                    <Details>
                        <Title>Lake Inniscarra, Ireland—Pyramid</Title>
                        <Avatar src={Avatar1} alt="Avatar 1" />
                    </Details>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop2} alt="Card 2" />
                </CardImgWrapper>
                <CardInfoWrapper>
                    <Details>
                        <Title>Performance Series</Title>
                        <Avatar src={Avatar2} alt="Avatar 2" />
                    </Details>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop3} alt="Card 3" />
                </CardImgWrapper>
                <CardInfoWrapper>
                    <Details>
                        <Title>Slow Pulls and Fast Intervals</Title>
                        <Avatar src={Avatar3} alt="Avatar 3" />
                    </Details>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop4} alt="Card 4" />
                </CardImgWrapper>
                <CardInfoWrapper>
                    <Details>
                        <Title>20 Minutes to Toned</Title>
                        <Avatar src={Avatar4} alt="Avatar 4" />
                    </Details>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop5} alt="Card 5" />
                </CardImgWrapper>
                <CardInfoWrapper>
                    <Details>
                        <Title>Charles Race, Boston, Massachusetts</Title>
                        <Avatar src={Avatar5} alt="Avatar 5" />
                    </Details>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop6} alt="Card 6" />
                </CardImgWrapper>
                <CardInfoWrapper>
                    <Details>
                        <Title>Full-Body HIIT Series</Title>
                        <Avatar src={Avatar6} alt="Avatar 6" />
                    </Details>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop7} alt="Card 7" />
                </CardImgWrapper>
                <CardInfoWrapper>
                    <Details>
                        <Title>Kafue River, Zambia—Power Stroke Pyramid</Title>
                        <Avatar src={Avatar7} alt="Avatar 7" />
                    </Details>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop8} alt="Card 8" />
                </CardImgWrapper>
                <CardInfoWrapper>
                    <Details>
                        <Title>Shred & Burn Series</Title>
                        <Avatar src={Avatar8} alt="Avatar 8" />
                    </Details>
                </CardInfoWrapper>
            </Card>
        </Container>
    </Wrapper>
    );
  }

export default DesktopLibrary