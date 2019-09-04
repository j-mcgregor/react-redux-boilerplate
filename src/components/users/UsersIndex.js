import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Header1: styled.h1`
    text-align: center;
  `
}

const UsersIndex = () => {
  return (
    <div>
      <S.Header1>Users</S.Header1>
    </div>
  );
};

UsersIndex.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})),
}

export default UsersIndex;
