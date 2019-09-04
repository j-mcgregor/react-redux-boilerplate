/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { hot } from "react-hot-loader";
import styled, { ThemeProvider } from 'styled-components';
import UsersContainer from "./containers/UsersContainer";
import { bindActionCreators } from 'redux';
import * as actions from '../actions/themeActions';
import NotFoundPage from "./NotFoundPage";
import Navbar from "./shared/Navbar";

const S = {
  Body: styled.div`
    background: ${({ palette, theme }) => palette[theme].bgColor1};
    color: ${({ palette, theme }) => palette[theme].fgColor1};
    min-height: 100vh;
    width: 100%;
  `
}

class App extends Component {
  render() {
    const { theme, actions } = this.props;

    return (
      <ThemeProvider theme={theme.palette}>
        <S.Body theme={theme.theme} palette={theme.palette}>
          <Navbar switchTheme={() => actions.switchTheme(theme.theme)} theme={theme.theme} palette={theme.palette} />
          <Switch>
            <Route exact path="/" render={props => <UsersContainer {...props} theme={theme} />} />
            <Route component={NotFoundPage} />
          </Switch>
        </S.Body>
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.element,
  theme: PropTypes.object,
  palette: PropTypes.object,
  actions: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    theme: state.theme
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
