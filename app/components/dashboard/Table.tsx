"use client";
import React, { useEffect, useRef } from "react";
import { Grid as GridJs } from "gridjs"; // Import Grid as GridJs to avoid conflicts
import "gridjs/dist/theme/mermaid.min.css"; // Ensure you import the correct minified CSS file

type TableProps = {
  columns: string[];
  data: string[][];
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const gridInstance = useRef<GridJs | null>(null);

  useEffect(() => {
    if (
      tableRef.current &&
      columns &&
      columns.length > 0 &&
      data &&
      data.length > 0
    ) {
      if (!gridInstance.current) {
        gridInstance.current = new GridJs({
          columns: columns.map((col) => ({ name: col })),
          data,
          pagination: {
            enabled: true,
            limit: 6, // Number of rows per page
          },
          search: true,
          sort: true,
          resizable: true,
          language: {
            'search': {
              'placeholder': '🔎 Search...'

            },
            'pagination': {
              // 'previous': '⬅️',
              // 'next': '➡️',
              'showing': 'Displaying',
              'results': () => 'Records'
            }
          },
          style: {
            table: {
              border: "1px solid #ccc",
            },
            input: {
              border: "none"
            },
            th: {
              "background-color": "rgba(0, 0, 0, 0.1)",
              color: "#000",
              "border-bottom": "3px solid #ccc",
              "text-align": "center",
            },
            td: {
              "text-align": "center",
            },
          },
        });
        gridInstance.current.render(tableRef.current);
      } else {
        // If Grid.js instance already exists, update data
        gridInstance.current.updateConfig({
          data,
        });
        gridInstance.current.forceRender();
      }
    }
  }, [columns, data]);

  return (
    <div>
      
      <div ref={tableRef}></div>
    </div>
  );
};

export default Table;
