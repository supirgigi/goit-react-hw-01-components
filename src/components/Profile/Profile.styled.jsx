import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: 1px solid #e4e9f0;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.15);
`;

export const Description = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color-white);
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;
  font-size: 12px;
  color: var(--text-color-grey);
`;

export const UserLocation = styled.p`
  font-size: 13px;
  color: var(--text-color-grey);
`;

export const Stats = styled.ul`
  width: 100%;
  display: flex;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e4e9f0;
  background-color: #f3f6f9;

  &:not(:last-child) {
    border-right: 1px solid #e4e9f0;
  }
`;

export const StatsLabel = styled.span`
  margin-bottom: 4px;
  color: var(--text-color-grey);
  font-size: 12px;
`;

export const StatsQuantity = styled.span`
  font-size: 13px;
  font-weight: 700;
`;
