"use client";
import { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const DataTableComponent = () => {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    async function loadScripts() {
      // Load jQuery dynamically
      const scriptJQuery = document.createElement("script");
      scriptJQuery.src = "https://code.jquery.com/jquery-3.4.1.min.js";
      scriptJQuery.async = true;
      document.body.appendChild(scriptJQuery);

      // Wait for jQuery to load
      await new Promise((resolve) => {
        scriptJQuery.onload = resolve;
      });

      // Load DataTables script
      const scriptDataTables = document.createElement("script");
      scriptDataTables.src =
        "https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js";
      scriptDataTables.async = true;
      document.body.appendChild(scriptDataTables);

      // Wait for DataTables to load
      await new Promise((resolve) => {
        scriptDataTables.onload = resolve;
      });

      // Load Responsive extension script
      const scriptResponsive = document.createElement("script");
      scriptResponsive.src =
        "https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js";
      scriptResponsive.async = true;
      document.body.appendChild(scriptResponsive);

      // Wait for Responsive extension to load
      await new Promise((resolve) => {
        scriptResponsive.onload = resolve;
      });

      // Initialize DataTable
      if (tableRef.current) {
        const table = window.$(tableRef.current).DataTable({
          responsive: true,
        });
        table.columns.adjust().responsive.recalc();
      }
    }

    loadScripts();
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 w-full leading-normal">
      <div className="container w-full mx-auto px-2">
        <div
          id="recipients"
          className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
        >
          <div style={{ overflowX: "auto" }}>
            <table
              ref={tableRef}
              id="example"
              className="stripe hover"
              style={{ width: "100%", tableLayout: "fixed" }}
            >
              <colgroup>
                <col style={{ width: "16.66%" }} />
                <col style={{ width: "16.66%" }} />
                <col style={{ width: "16.66%" }} />
                <col style={{ width: "16.66%" }} />
                <col style={{ width: "16.66%" }} />
                <col style={{ width: "16.66%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th data-priority="1">Name</th>
                  <th data-priority="2">Position</th>
                  <th data-priority="3">Office</th>
                  <th data-priority="4">Age</th>
                  <th data-priority="5">Start date</th>
                  <th data-priority="6">Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
                {/* Rest of your existing data */}
                <tr>
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011/01/25</td>
                  <td>$112,000</td>
                </tr>
                {/* Additional 20 dummy rows */}
                <tr>
                  <td>John Doe</td>
                  <td>Software Engineer</td>
                  <td>San Francisco</td>
                  <td>30</td>
                  <td>2015/10/15</td>
                  <td>$200,000</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Marketing Manager</td>
                  <td>Los Angeles</td>
                  <td>35</td>
                  <td>2014/11/20</td>
                  <td>$150,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTableComponent;
