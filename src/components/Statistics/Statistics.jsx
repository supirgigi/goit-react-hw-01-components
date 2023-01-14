import PropTypes from 'prop-types';
import {
  StatsSection,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {stats.map(stat => (
          <StatsItem key={stat.id}>
            <StatsLabel>{stat.label}</StatsLabel>
            <StatsPercentage>{`${stat.percentage}%`}</StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
