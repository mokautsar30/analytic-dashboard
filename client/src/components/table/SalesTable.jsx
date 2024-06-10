import React from "react";
import { useSelector } from "react-redux";
import filterSales from "../../utils/filterSales";

const SalesTable = () => {
  const { sales, searchTerm, startDate, endDate } = useSelector(
    (state) => state.sales
  );

  const filteredSales = filterSales(sales, searchTerm, startDate, endDate);

  return (
    <>
      <table className="min-w-full bg-white border bg-blue">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="py-2">Product</th>
            <th className="py-2">Date</th>
            <th className="py-2">Sales</th>
            <th className="py-2">Revenue</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filteredSales.map((sale) => (
            <tr key={sale.id}>
              <td className="border px-4 py-2">{sale.product}</td>
              <td className="border px-4 py-2">{sale.date}</td>
              <td className="border px-4 py-2">{sale.sales}</td>
              <td className="border px-4 py-2">{sale.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SalesTable;
