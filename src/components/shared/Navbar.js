import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  NavBar: styled.nav``
}

const Navbar = (props) => {
  const { switchTheme, theme, palette } = props;
  const isDarkMode = localStorage.getItem("isDarkMode");
  const isChecked = isDarkMode === 'true' ? true : false;
  return (
    <S.NavBar theme={theme} palette={palette}>
      <NavLink to="/tasks">Dashboard</NavLink>
      <NavLink exact to="/">Users</NavLink>
      <div className="right">
        <input type="checkbox" onChange={switchTheme} checked={isChecked} />
      </div>
    </S.NavBar>
  );
}

Navbar.propTypes = {
  switchTheme: PropTypes.func,
  theme: PropTypes.string,
  palette: PropTypes.object,
}

export default Navbar;
