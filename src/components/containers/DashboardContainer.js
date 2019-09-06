/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as actions from '../../actions/userActions';

const S = {
  Header1: styled.h1`
    text-align: center;
  `
}

export class DashboardContainer extends React.Component {

  render() {
    return (
      <div>
        <S.Header1>Dashboard</S.Header1>
      </div>
    );
  }
}

DashboardContainer.propTypes = {

};

export default connect()(DashboardContainer);
