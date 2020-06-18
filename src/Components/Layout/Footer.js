import React from 'react';
import styled from "styled-components";

// Icon links
import SocialCircle from '../../Images/SocialCircle.svg';
import Youtube from '../../Images/Youtube.png';
import Facebook from '../../Images/Facebook.png';
import Pinterest from '../../Images/Pinterest.png';
import Instagram from '../../Images/Instagram.png';
import Twitter from '../../Images/Twitter.png';
import ArrowDown from '../../Images/ArrowDown.png';

const Wrapper = styled.section`
    position: relative;
    width: 100%;
    height: 348px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    background-color: #2e3134;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LinksContainer = styled.div`
    height: 208px;
    display: flex;
    align-items: center;
`;
const LinksWrapper = styled.div`
    width: 100vw;
    padding: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (min-width: 700px) {
        width: 700px;
    }
`;
const Column = styled.ul`
    list-style: none;
    color: #fff;
    font: 600 14px/16px "Proxima Nova Lt";
    text-align: left;
`;
const LinkTitle = styled.div`
    font: 700 14px/16px "Proxima Nova Rg";
    letter-spacing: 0.5px;
`;
const Link = styled.li`
    opacity: 0.8;
    letter-spacing: 0.3px;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        opacity: 1;
        transition: 0.3s ease-in-out;
    }
`;
const SocialContainer = styled.div`
    height: 72px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #585a5d;
    border-bottom: 2px solid #585a5d;
`;
const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    margin: 0 16px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
        transform: rotate(360deg);
        transition: 0.5s ease-in-out;
    }
`;
const Circle = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`;
const LegalContainer = styled.div`
    position: relative;
    width: 100%;
    height: 128px;
    color: #fff;
    font: 600 14px/16px "Proxima Nova Lt";
    letter-spacing: 0.3px;
    padding: 24px 20px;
    @media (min-width: 700px) {
        align-items: center;
        height: 64px;
        padding: 24px 40px;
    }
`;
const Main = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (min-width: 700px) {
        justify-content: center;
    }
`;
const Copyright = styled.div`
    color: #fff;
    font: 400 14px/16px "Proxima Nova Rg";
    letter-spacing: 0.3px;
`;
const LegalItem = styled.p`
    opacity: 0.8;
    margin-left: 10px;
    transition: 0.3s ease-in-out;
    &:hover {
        opacity: 1;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }
    @media (min-width: 700px) {
        margin-left: 25px;
    }
`;
const Language = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font: 700 14px/16px "Proxima Nova Rg";
    letter-spacing: 0.5px;
    cursor: pointer;
    margin-top: 20px;
    @media (min-width: 700px) {
        position: absolute;
        left: 0;
        margin: 0 0 0 40px;
    }
`;
const Arrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
`;

function Footer() {
    return (
    <Wrapper>
        <LinksContainer>
            <LinksWrapper>
                <Column>
                    <LinkTitle><p>Company</p></LinkTitle>
                    <Link>About</Link>
                    <Link>Contact Us</Link>
                    <Link>Careers</Link>
                </Column>
                <Column>
                    <LinkTitle><p>Account</p></LinkTitle>
                    <Link>Log In</Link>
                    <Link>Create Account</Link>
                </Column>
                <Column>
                    <LinkTitle><p>Support</p></LinkTitle>
                    <Link>Help Center</Link>
                    <Link>Accessibility</Link>
                </Column>
            </LinksWrapper>
        </LinksContainer>
        <SocialContainer>
            <IconWrapper>
                <Circle src={SocialCircle} alt="Circle" />
                <img src={Youtube} alt="YouTube" />
            </IconWrapper>
            <IconWrapper>
                <Circle src={SocialCircle} alt="Circle" />
                <img src={Pinterest} alt="Pinterest" />
            </IconWrapper>
            <IconWrapper>
                <Circle src={SocialCircle} alt="Circle" />
                <img src={Facebook} alt="Facebook" />
            </IconWrapper>
            <IconWrapper>
                <Circle src={SocialCircle} alt="Circle" />
                <img src={Twitter} alt="Twitter" />
            </IconWrapper>
            <IconWrapper>
                <Circle src={SocialCircle} alt="Circle" />
                <img src={Instagram} alt="Instagram" />
            </IconWrapper>
        </SocialContainer>
        <LegalContainer>
            <Main>
                <Copyright><p>© iFit.com. All Rights Reserved.</p></Copyright>
                <LegalItem>Privacy Policy</LegalItem>
                <LegalItem>Terms of Use</LegalItem>
            </Main>
            <Language>
                <p>English</p>
                <Arrow><img src={ArrowDown} alt="ArrowDown" /></Arrow>
            </Language>
        </LegalContainer>
    </Wrapper>
    );
  }

export default Footer
