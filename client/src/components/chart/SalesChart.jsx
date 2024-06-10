import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const SalesChart = () => {
  const { sales, searchTerm, startDate, endDate } = useSelector(
    (state) => state.sales
  );

  const filteredSales = sales.filter((sale) => {
    const matchesProduct = sale.product
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDate =
      (!startDate || new Date(sale.date) >= new Date(startDate)) &&
      (!endDate || new Date(sale.date) <= new Date(endDate));
    return matchesProduct && matchesDate;
  });

  return (
    <div className="flex flex-col md:flex-row justify-between mb-4">
      <LineChart width={750} height={300} data={filteredSales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <BarChart width={450} height={300} data={filteredSales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#c90076" />
      </BarChart>
    </div>
  );
};

export default SalesChart;
