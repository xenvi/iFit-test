import React from 'react';
import styled from "styled-components";

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
    width: 700px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
    border-top: 2px solid #585a5d;
    border-bottom: 2px solid #585a5d;
`;
const LegalContainer = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font: 600 14px/16px "Proxima Nova Lt";
    letter-spacing: 0.3px;
`;
const Copyright = styled.div`
    color: #fff;
    font: 400 14px/16px "Proxima Nova Rg";
    letter-spacing: 0.3px;
`;
const LegalItem = styled.p`
    opacity: 0.8;
    margin-left: 25px;
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

        </SocialContainer>
        <LegalContainer>
            <Copyright><p>© iFit.com. All Rights Reserved.</p></Copyright>
            <LegalItem>Privacy Policy</LegalItem>
            <LegalItem>Terms of Use</LegalItem>
        </LegalContainer>
    </Wrapper>
    );
  }

export default Footer
