import React from 'react';
import styled from "styled-components";

const Wrapper = styled.nav`
    width: 100%;
    height: 46px;
    background: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
    z-index: 3;
    position: sticky;
    top: 0;
`;
const ListItems = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    font: 600 14px/14px "Proxima Nova Lt";
    letter-spacing: 1px;
    text-transform: uppercase;
`;
const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgba(46, 49, 52, 0.8);
    padding: 0 40px;
    border-right: 1px solid #d5d6d6;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        color: #ccc;
        transition: 0.3s ease-in-out;
    }
`;

function ProductNav() {
    return (
    <Wrapper id="productnav">
        <ListItems>
            <Item>Blog</Item>
            <Item>Nourish</Item>
            <Item>Shop</Item>
        </ListItems>
    </Wrapper>
    );
  }

export default ProductNav