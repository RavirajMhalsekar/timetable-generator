"use client";
import { useEffect, useRef, useState } from 'react';

type SimpleTableProps = {
  columns: string[];
  data: string[][];
};

const Table: React.FC<SimpleTableProps> = ({ columns, data }) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when data changes
  }, [data]);

  const filteredData = data.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePagination = (action: string) => {
    if (action === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (action === 'next' && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (tableRef.current && columns && columns.length > 0 && currentItems && currentItems.length > 0) {
      const table = tableRef.current;

      // Clear existing table content if any
      table.innerHTML = '';

      // Create table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      headerRow.className = 'bg-gray-100';
      columns.forEach((col) => {
        const th = document.createElement('th');
        th.textContent = col;
        th.className = 'border-b-2 border-gray-300 py-2 px-4 text-center';
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);

      // Create table body with data
      const tbody = document.createElement('tbody');
      currentItems.forEach((rowData) => {
        const row = document.createElement('tr');
        row.className = 'text-center';
        rowData.forEach((cellData) => {
          const cell = document.createElement('td');
          cell.textContent = cellData;
          cell.className = 'border px-4 py-2';
          row.appendChild(cell);
        });
        tbody.appendChild(row);
      });

      // Append the header and body to the table
      table.appendChild(thead);
      table.appendChild(tbody);
    }
  }, [columns, currentItems]);

  return (
    <div className="overflow-x-auto">
      <div className="mt-1 mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 px-3 py-2 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="min-w-full border-collapse border border-gray-300" ref={tableRef}></table>
      <div className="flex justify-between mt-4">
        <span>{`${indexOfFirstItem + 1} - ${
          indexOfLastItem > filteredData.length ? filteredData.length : indexOfLastItem
        } of ${filteredData.length} rows selected`}</span>
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-md disabled:bg-gray-300"
            onClick={() => handlePagination('prev')}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-md disabled:bg-gray-300"
            onClick={() => handlePagination('next')}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
