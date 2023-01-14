import styled from '@emotion/styled';

export const Table = styled.table`
  width: 570px;
  margin: 0 auto;
  border-collapse: collapse;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
`;

export const TableHeadItem = styled.th`
  width: calc(100% / 3);
  padding: 12px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--text-color-white);

  &:not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const TableRow = styled.tr`
  background-color: var(--bg-color-white);

  &:nth-of-type(even) {
    background-color: #ecf1f4;
  }
`;

export const TableRowItem = styled.td`
  width: calc(100% / 3);
  padding: 12px;
  color: var(--text-color-grey);
  font-size: 12px;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid #e5e5e5;
  }
`;
