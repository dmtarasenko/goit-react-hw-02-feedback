import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/FeedbackOptions/FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;

    return (
      <div>
        {options.map(option => (
          <Button key={option} name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
