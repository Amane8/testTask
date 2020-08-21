import React from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { Link } from "react-router-dom";

function Buyers() {

  let data = React.useMemo(
    () => dataArray,[]
  )

  let columns = React.useMemo(
    () => colArray,[]
  )

  const tableInstance = useTable({ columns, data, initialState: { pageIndex: 0 }, }, useFilters, useSortBy, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance

  return (
    <div>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 15].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

let dataArray = [
  {
    col1: <Link to="/buyers/1">1</Link>,
    col2: 'Андрей',
    col3: 1250,
    col4: 3,
    col5: 3750,
  },
  {
    col1: <Link to="/buyers/2">2</Link>,
    col2: 'Виктор',
    col3: 3580,
    col4: 1,
    col5: 3580,
  },
  {
    col1: <Link to="/buyers/3">3</Link>, 
    col2: 'Виктория',
    col3: 2546,
    col4: 2,
    col5: 5092,
  },
  {
    col1: <Link to="/buyers/4">4</Link>,
    col2: 'Николай',
    col3: 8900,
    col4: 1,
    col5: 8900,
  },
  {
    col1: <Link to="/buyers/5">5</Link>,
    col2: 'Андрей',
    col3: 125,
    col4: 1,
    col5: 125,
  },
  {
    col1: <Link to="/buyers/6">6</Link>,
    col2: 'Екатерина',
    col3: 350,
    col4: 2,
    col5: 700,
  },
  {
    col1: <Link to="/buyers/7">7</Link>,
    col2: 'Владимир',
    col3: 2100,
    col4: 1,
    col5: 2100,
  },
  {
    col1: <Link to="/buyers/8">8</Link>,
    col2: 'Петр',
    col3: 5800,
    col4: 2,
    col5: 11600,
  },
  {
    col1: <Link to="/buyers/9">9</Link>,
    col2: 'Петр',
    col3: 5800,
    col4: 2,
    col5: 11600,
  },
  {
    col1: <Link to="/buyers/10">10</Link>,
    col2: 'Мария',
    col3: 700,
    col4: 2,
    col5: 1400,
  },
  {
    col1: <Link to="/buyers/11">11</Link>,
    col2: 'Егор',
    col3: 50,
    col4: 1,
    col5: 50,
  },
  {
    col1: <Link to="/buyers/12">12</Link>,
    col2: 'Андрей',
    col3: 1250,
    col4: 3,
    col5: 3750,
  },
  {
    col1: <Link to="/buyers/13">13</Link>,
    col2: 'Антон',
    col3: 325,
    col4: 1,
    col5: 325,
  },
  {
    col1: <Link to="/buyers/14">14</Link>,
    col2: 'Мария',
    col3: 700,
    col4: 2,
    col5: 1400,
  },
  {
    col1: <Link to="/buyers/15">15</Link>,
    col2: 'Виктория',
    col3: 3546,
    col4: 2,
    col5: 7092,
  },
]

let colArray = [
  {
    Header: 'ID покупателя',
    accessor: 'col1',
    disableSortBy: true,
  },
  {
    Header: 'Имя покупателя',
    accessor: 'col2',
    disableSortBy: true,
  },
  {
    Header: 'Средний чек',
    accessor: 'col3',
  },
  {
    Header: 'Количество покупок',
    accessor: 'col4',
  },
  {
    Header: 'Общая выручка',
    accessor: 'col5',
  },
]

export default Buyers;