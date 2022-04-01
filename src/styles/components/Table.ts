import styled from "styled-components";

export const TableContainer = styled.div`
  background-color: transparent;
  margin: 10px 0;
  overflow-y: auto;
  table,
  th,
  td {
    font-size: 0.9rem;
    text-align: left;
    font-weight: 300;
  }
  table {
    width: 100%;
    border-spacing: 0;
  }
  .table-header th {
    font-weight: 400;
    text-align: left;
    background-color: #f1f5f9;
    color: #1c1c1c;
    border-radius: 4px;
    border-bottom: 1px solid #ddd;
  }
  td,
  th {
    padding: 15px 0;
  }
  td {
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 15px 10px 15px 0px;
    background-color: #f1f5f9;
    color: #000;
    border-bottom: 1px solid #ddd;
  }

  .icon_table {
    text-align: left;
    cursor: pointer;
    background-color: #f1f5f9;
    > svg {
      margin: 0 10px;
      opacity: 0.8;
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        opacity: 1;
      }
      @media (min-width: 320px) and (max-width: 480px) {
        display: none;
      }
    }
  }
  .colm {
    padding-left: 10px;
    width: 300px;
  }
  .col_row {
    padding-left: 10px;
  }
  h4 {
    font-weight: 200;
  }
  p {
    font-weight: 100;
  }
  @media all and (max-width: 480px) {
    .table-header {
      display: none;
      border: none;
    }
    th,
    td {
      display: block;
      border: none;
    }
    tr {
      border-bottom: 1px solid rgba(45, 46, 49, 0.4);
      width: 100%;
    }
    .col {
      max-width: 100rem;
    }
    .col {
      display: flex;
      padding: 10px 10px;
      &:before {
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: left;
        font-weight: 500;
      }
    }
  }
  .see_dates_of_banks {
    border: 1px solid transparent;
    padding: 5px 10px;
    color: #fff;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;
