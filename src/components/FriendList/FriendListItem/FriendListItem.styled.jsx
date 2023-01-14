import styled from '@emotion/styled';

export const FriendItem = styled.li`
  padding: 4px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-color-white);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
`;

export const FriendStatus = styled.span`
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  width: 14px;
  height: 14px;
`;

export const FriendName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
