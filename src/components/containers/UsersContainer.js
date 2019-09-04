/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/userActions';
import UsersIndex from '../users/UsersIndex';

export class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.actions.getUsers();
  }

  render() {
    return (
      <UsersIndex
        users={this.props.users.users}
      />
    );
  }
}

const UserPropTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})),
}

UsersContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.shape(UserPropTypes).isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
