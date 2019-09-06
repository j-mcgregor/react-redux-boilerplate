import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  NavBar: styled.nav`
    display: flex;
    flex-direction: row;
    padding: 0 50px;
    background: ${({ palette, theme }) => palette[theme].bgColor2};
    box-shadow: 0 0 5px black;
    a {
      padding: 12px 20px;
      transition: 0.2s;
      color: ${({ palette, theme }) => palette[theme].fgColor2};
      text-decoration: none;

      &:hover {
        background: ${({ palette, theme }) => palette[theme].bgColor1};
      }
    }

    input[type="checkbox"] {
      margin: 15px;
    }
  `
}

const Navbar = ({ switchTheme, theme, palette }) => {
  const isDarkMode = localStorage.getItem("isDarkMode");
  const isChecked = isDarkMode === 'true' ? true : false;
  return (
    <S.NavBar theme={theme} palette={palette}>
      <NavLink exact to="/">Dashboard</NavLink>
      <NavLink to="/users">Users</NavLink>
      <input type="checkbox" onChange={switchTheme} checked={isChecked} />
    </S.NavBar>
  );
}

Navbar.propTypes = {
  switchTheme: PropTypes.func,
  theme: PropTypes.string,
  palette: PropTypes.object,
}

export default Navbar;
