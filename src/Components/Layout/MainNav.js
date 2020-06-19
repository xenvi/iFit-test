import React, { Fragment } from 'react';
import styled from "styled-components";

// Image files
import BrandSvg from "../../Images/Brand.svg";

const Wrapper = styled.nav`
    width: 100%;
    height: 72px;
    box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    margin-top: 1px;
    color: rgba(46, 49, 52, 0.8);
    z-index: 3;
    transition: 0.6s ease-in-out;
`;
const NavLinks = styled.ul`
    display: none;
    list-style: none;
    height: 100%;
    font: 600 14px/14px "Proxima Nova Lt";
    letter-spacing: 1px;
    text-transform: uppercase;
    @media (min-width: 800px) {
        display: flex;
    }
`;
const Link = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        color: #ccc;
        transition: 0.3s ease-in-out;
    }
`;
const Button = styled.button`
    display: none;
    width: 90px;
    height: 36px;
    box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
    border-radius: 4px;
    background: #0069d2;
    font: 700 14px/16px "Proxima Nova Rg";
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:focus {
        outline: none;
    }
    &:hover {
        background: #00478f;
        transition: 0.3s ease-in-out;
    }
    @media (min-width: 800px) {
        display: block;
    }
`;
const Brand = styled.img`
    cursor: pointer;
`;
const Hamburger = styled.div`
    position: relative;
    width: 28px;
    height: 28px;
    margin-top: 4px;
    cursor: pointer;
    & span {
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 15%;
        background: #898989;
        transition: 0.1s all ease-in-out;
    }
    & span:nth-child(1) {
        top: 0;
    }
    & span:nth-child(2), span:nth-child(3) {
        top: 10px;
    }
    & span:nth-child(4) {
        top: 20px;
    }
    &.open {
        & span:nth-child(1) {
            top: 10px;
            opacity: 0;
        }
        & span:nth-child(2) {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
            background: #898989;
        }
        & span:nth-child(3) {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            background: #898989;
        }
        & span:nth-child(4) {
            top: 10px;
            opacity: 0;
        }
    }
    @media (min-width: 800px) {
        display: none;
    }
`;
const MobileNav = styled.nav`
    z-index: 2;
    position: fixed;
    top: 0;
    right: -50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font: 600 14px/14px "Proxima Nova Lt";
    letter-spacing: 1px;
    text-transform: uppercase;
    background: #fff;
    width: 50%;
    height: 100%;
    padding-top: 46px;
    box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
    margin-left: 100%;
    transition: 0.3s ease-in-out;
    @media (min-width: 800px) {
        display: none;
    }
`;
const MobileLink = styled(Link)`
    padding: 15px 0;
    width: 100%;
`;
const MobileButton = styled(Button)`
    display: block;
    margin: 15px 0;
`;

function MainNav() {
    return (
    <Fragment>
        <Wrapper id="nav" className="stickynav">
        <Brand src={BrandSvg} alt="Brand" />
        <Hamburger id="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </Hamburger>
            <NavLinks>
                <Link>Exercise</Link>
                <Link>Nutrition</Link>
                <Link>Activity</Link>
                <Link>Sleep</Link>
            </NavLinks>        
            <Button>
                <p>Sign Up</p>
            </Button>
        </Wrapper>
        <MobileNav id="mobilenav">
            <MobileLink>Exercise</MobileLink>
            <MobileLink>Nutrition</MobileLink>
            <MobileLink>Activity</MobileLink>
            <MobileLink>Sleep</MobileLink>
            <MobileButton>
                <p>Sign Up</p>
            </MobileButton>
        </MobileNav>
    </Fragment>
    );
  }

export default MainNav