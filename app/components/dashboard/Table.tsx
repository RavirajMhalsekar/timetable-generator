"use client"
// components/Table.tsx
import React, { useState, useEffect, FC } from 'react';

type SimpleTableProps = {
  columns: string[];
  data: (string | number)[][]; 
};

type SortConfig = {
  key: number;
  direction: 'ascending' | 'descending';
} | null;

const Table: FC<SimpleTableProps> = ({ columns, data }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);
  const itemsPerPage = 7;

  useEffect(() => {
    setCurrentPage(1); 
  }, [data]);

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const filteredData = sortedData.filter((row) =>
    row.some((cell) => 
      cell.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePagination = (action: 'prev' | 'next') => {
    if (action === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (action === 'next' && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const requestSort = (key: number) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

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
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col, index) => (
              <th
                key={index}
                onClick={() => requestSort(index)}
                className="border-b-2 border-gray-300 py-2 px-4 text-center cursor-pointer"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-center">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <span>{`${indexOfFirstItem + 1} - ${
          indexOfLastItem > filteredData.length ? filteredData.length : indexOfLastItem
        } of ${filteredData.length} rows`}</span>
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
