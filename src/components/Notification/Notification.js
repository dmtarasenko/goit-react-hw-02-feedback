import { Component } from 'react';
import { MessageContainer } from 'components/Notification/Notification.styled';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <MessageContainer>{message}</MessageContainer>;
  }
}
