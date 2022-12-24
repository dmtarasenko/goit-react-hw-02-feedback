import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
} from 'components/Statistics/Statistics.styled';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>
          Positive feedback: {positivePercentage} %
        </StatisticsItem>
      </StatisticsList>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.string,
  positivePercentage: PropTypes.string,
};
