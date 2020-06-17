import React from 'react';
import styled from "styled-components";

// Image files
import Desktop1 from '../../Images/Desktop1.jpg';
import Desktop2 from '../../Images/Desktop2.jpg';
import Desktop3 from '../../Images/Desktop3.jpg';
import Desktop4 from '../../Images/Desktop4.jpg';
import Desktop5 from '../../Images/Desktop5.jpg';
import Desktop6 from '../../Images/Desktop6.jpg';
import Desktop7 from '../../Images/Desktop7.jpg';
import Desktop8 from '../../Images/Desktop8.jpg';

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

function DesktopLibrary() {
    return (
    <Wrapper>
        <Container>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop1} alt="Card 1" />
                </CardImgWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop2} alt="Card 2" />
                </CardImgWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop3} alt="Card 3" />
                </CardImgWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop4} alt="Card 4" />
                </CardImgWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop5} alt="Card 5" />
                </CardImgWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop6} alt="Card 6" />
                </CardImgWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop7} alt="Card 7" />
                </CardImgWrapper>
            </Card>
            <Card>
                <CardImgWrapper>
                    <CardImg src={Desktop8} alt="Card 8" />
                </CardImgWrapper>
            </Card>
        </Container>
    </Wrapper>
    );
  }

export default DesktopLibrary