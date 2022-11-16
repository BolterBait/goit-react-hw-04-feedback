import React from 'react';
import PropTypes from 'prop-types';
import { Result, DataRecord } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <Result>
        <DataRecord>Good: {good}</DataRecord>
        <DataRecord>Neutral: {neutral}</DataRecord>
        <DataRecord>Bad: {bad}</DataRecord>
        <DataRecord>Total: {total}</DataRecord>
        <DataRecord>Positive feedback: {positivePercentage}%</DataRecord>
      </Result>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
