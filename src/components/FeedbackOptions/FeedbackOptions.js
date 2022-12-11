import { Component } from 'react';
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
