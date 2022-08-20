import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import './styles.css'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    font-size: 1rem;
    position: sticky;
    top: 0px;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: centers;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`
export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Home</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/equipment">
                        Equipment
                    </NavLink>
                    <NavLink to="/ableton">
                        Ableton
                    </NavLink>
                    <NavLink to="/arrangement">
                        Arrangement
                    </NavLink>
                    <NavLink to="/recording">
                        Recording
                    </NavLink>
                    <NavLink to="/production">
                        Production
                    </NavLink>
                    <NavLink to="/effects">
                        Effects
                    </NavLink>
                    <NavLink to="/mixmaster">
                        Mix/Master
                    </NavLink>
                    <NavLink to="/sounddesign">
                        Sound Design
                    </NavLink>
                </NavMenu>
                
                <div className='search-bar'>
                    <input id='search' type='text' style={{position: "absolute", float: "right", margin: "2vh"}}/>
                </div>
            </Nav>
        </>
    );

}

export default Navbar;