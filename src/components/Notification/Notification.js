import { Component } from 'react';
import PropTypes from 'prop-types';
import { MessageContainer } from 'components/Notification/Notification.styled';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <MessageContainer>{message}</MessageContainer>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
