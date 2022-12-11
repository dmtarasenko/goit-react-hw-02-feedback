import { Component } from 'react';
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
