import React, { useRef } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import { Table, Pagination, InputGroup, FormControl, Button } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DataTable = ({ columns, data, tableId, fileName }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    gotoPage,
    nextPage,
    previousPage,
    pageCount,
    canNextPage,
    canPreviousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const exportToExcel = () => {
    const table = document.getElementById(tableId);
    const ws = XLSX.utils.table_to_sheet(table);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  const { pageIndex, pageSize, globalFilter } = state;

  const tableRef = useRef(null);

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: tableRef.current });
    doc.save('table.pdf');
  };
 
  const handleRowClick = () => {
    // Navigate to another page when a row is clicked
    window.location.href="/candinfo" // Replace '/details' with your desired route
  };

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <select
            className='text-light rounded p-1'
            style={{ backgroundColor: '#2B358C' }}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>
          <InputGroup className="mb-3 text-dark">
            <FormControl
              className='bg-transparent text-dark'
              placeholder="Search..."
              value={globalFilter || ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </InputGroup>
        </div>
        <div>
          <Button  onClick={exportToPDF} style={{backgroundColor:'#2B358C',margin:'5px'}}>Export PDF</Button>
          <Button  onClick={exportToExcel} style={{backgroundColor:'#2B358C',margin:'5px'}}>Export Excel</Button>
        </div>
      </div>

      <Table {...getTableProps()} responsive hover variant="light" className="mt-1" ref={tableRef} id={tableId}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={handleRowClick}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      
      <div className='d-flex justify-content-between'>
        <div>
          <span className='text-light'>
            Showing Page{' '}
            <strong>
              {pageIndex + 1} of {pageCount}
            </strong>{' '}
          </span>
        </div>
        <div>
          <Pagination className='bg-dark text-light'>
            <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
            <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
            <Pagination.Item>{pageIndex + 1}</Pagination.Item>
            <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
            <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
