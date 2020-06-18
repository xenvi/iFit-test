import React, { useState, useEffect, useRef } from 'react';
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
// Icon files
import StopwatchImg from '../../Images/Stopwatch.png';
import DistanceImg from '../../Images/Distance.png';
import ViewMoreImg from '../../Images/ViewMore.png';

const Wrapper = styled.section`
    width: 100%;
    min-height: 584px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    padding: 0 20px;
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -20px;
    @media (min-width: 650px) {
        width: 595px;
        justify-content: space-between;
    }
    @media (min-width: 920px) {
        width: 920px;
    }
    @media (min-width: 1224px) {
        width: 1224px;
    }
`;
const Card = styled.div`
    min-width: 288px;
    max-width: 400px;
    margin-top: 20px;
    width: 100%;
    height: 280px;
    box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
    border-radius: 4px;
    background-color: #fff;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 7px 12px rgba(46, 49, 52, 0.3);
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }
    
    @media (min-width: 650px) {
        width: 288px;
      }
`;
const CardImgWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 164px;
    overflow: hidden;
`;
const CardImg = styled.img`
    min-width: 100%;
`;
const Overlay = styled.div`
    position: absolute;
    right: 0;
    width: 112px;
    height: 100%;
    background-color: rgba(0, 12, 40, 0.54);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: rgba(0, 12, 40, 0.74);
        transition: 0.3s ease-in-out;
    }
`;
const Number = styled.div`
    font: 400 28px/30px "League Gothic - Regular";
    letter-spacing: 0.5px;
`;
const Workout = styled.div`
    font: 700 10px/12px "Proxima Nova Rg";
    letter-spacing: 0.3px;
    text-transform: uppercase;
    margin: 8px 0;
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
const SmallDetails = styled.div`
    color: #2e3134;
    font: 700 10px/12px "Proxima Nova Rg";
    letter-spacing: 0.3px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    margin: 8px 0;
`;
const SmallImg = styled.img`
    margin-right: 4px;
`;
const SmallText = styled.p`
    margin-right: 8px;
`;
const ViewDetails = styled.div`
    margin-top: 12px;
    color: #0069d2;
    font: 700 14px/16px "Proxima Nova Rg";
    letter-spacing: 0.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        color: #00478f;
        transition: 0.3s ease-in-out;
    }
`;


function DesktopLibrary() {
    const [isVisible, setVisible] = useState({});
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
    <Wrapper>
        <Container className={`fade-in ${isVisible ? 'is-visible' : ''}`}
    ref={domRef}>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop1} alt="Card 1" />
                </CardImgWrapper>
                <CardInfoWrapper>
                    <Details>
                        <Title>Lake Inniscarra, Ireland—Pyramid</Title>
                        <Avatar src={Avatar1} alt="Avatar 1" />
                    </Details>
                    <SmallDetails>
                        <SmallImg src={StopwatchImg} alt="Stopwatch" />
                        <SmallText>30:53</SmallText>
                        <SmallImg src={DistanceImg} alt="Distance" />
                        <SmallText>6,248 M</SmallText>
                    </SmallDetails>
                    <ViewDetails><p>View Details</p></ViewDetails>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <Overlay>
                        <Number><span>9</span></Number>
                        <Workout><p>Workouts</p></Workout>
                        <img src={ViewMoreImg} alt="View more" />
                    </Overlay>
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
                    <SmallDetails>
                        <SmallImg src={StopwatchImg} alt="Stopwatch" />
                        <SmallText>44:13</SmallText>
                        <SmallImg src={DistanceImg} alt="Distance" />
                        <SmallText>9,948 M</SmallText>
                    </SmallDetails>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <Overlay>
                        <Number><span>12</span></Number>
                        <Workout><p>Workouts</p></Workout>
                        <img src={ViewMoreImg} alt="View more" />
                    </Overlay>
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
                    <SmallDetails>
                        <SmallImg src={StopwatchImg} alt="Stopwatch" />
                        <SmallText>36:22</SmallText>
                        <SmallImg src={DistanceImg} alt="Distance" />
                        <SmallText>8,648 M</SmallText>
                    </SmallDetails>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <Overlay>
                        <Number><span>12</span></Number>
                        <Workout><p>Workouts</p></Workout>
                        <img src={ViewMoreImg} alt="View more" />
                    </Overlay>
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
                    <SmallDetails>
                        <SmallImg src={StopwatchImg} alt="Stopwatch" />
                        <SmallText>22:22</SmallText>
                        <SmallImg src={DistanceImg} alt="Distance" />
                        <SmallText>4,660 M</SmallText>
                    </SmallDetails>
                </CardInfoWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <Overlay>
                        <Number><span>16</span></Number>
                        <Workout><p>Workouts</p></Workout>
                        <img src={ViewMoreImg} alt="View more" />
                    </Overlay>
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