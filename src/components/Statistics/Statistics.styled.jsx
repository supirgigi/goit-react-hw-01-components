import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils';

export const StatsSection = styled.section`
  width: 270px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

export const StatsTitle = styled.h2`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #53565b;
  background-color: var(--bg-color-white);
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 5);
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  align-items: center;
  background-color: ${getRandomHexColor};
`;

export const StatsLabel = styled.span`
  font-size: 10px;
  color: var(--text-color-white);
`;

export const StatsPercentage = styled.span`
  color: var(--text-color-white);
`;
