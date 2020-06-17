import React from 'react';
import styled from "styled-components";

// Image files
import BrandSvg from "../../Images/Brand.svg";

const Wrapper = styled.div`
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
`;
const NavLinks = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    font: 600 14px/14px "Proxima Nova Lt";
    letter-spacing: 1px;
    text-transform: uppercase;
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
`;
const Brand = styled.img`
    cursor: pointer;
`;

function MainNav() {
    return (
    <Wrapper>
        <Brand src={BrandSvg} alt="Brand" />    
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
    );
  }

export default MainNav