import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineDollar, AiOutlineCrown } from "react-icons/ai";
import { PiPackage } from "react-icons/pi";

const Statistic = () => {
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

  const totalSales = filteredSales.reduce((acc, sale) => acc + sale.sales, 0);
  const totalRevenue = filteredSales.reduce(
    (acc, sale) => acc + sale.revenue,
    0
  );
  const topProduct = filteredSales.reduce((top, sale) => {
    if (!top[sale.product]) {
      top[sale.product] = 0;
    }
    top[sale.product] += sale.sales;
    return top;
  }, {});

  const bestSellingProduct = Object.keys(topProduct).reduce(
    (a, b) => (topProduct[a] > topProduct[b] ? a : b),
    ""
  );

  const formattedTotalRevenue = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(totalRevenue);

  const minDate = new Date(
    Math.min(...filteredSales.map((sale) => new Date(sale.date)))
  );
  const maxDate = new Date(
    Math.max(...filteredSales.map((sale) => new Date(sale.date)))
  );

  const formattedStartDate = minDate.toLocaleDateString();
  const formattedEndDate = maxDate.toLocaleDateString();

  return (
    <>
      <div className="flex flex-wrap gap-x-4 gap-y-12 bg-gray-100 rounded-2xl px-4 py-10 lg:px-10 justify-center items-center mb-5">
        <div className="flex w-full lg:w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg p-3">
            <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-orange-700 to-orange-400 text-center text-white shadow-lg flex items-center justify-center">
              <PiPackage size={32} />
            </div>

            <div className="pt-1 text-right">
              <p className="text-sm font-light capitalize">Total Sales</p>
              <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                {totalSales}
              </h4>
            </div>

            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                  {" "}
                  {formattedStartDate} to {formattedEndDate}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg p-3">
            <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-green-700 to-green-400 text-center text-white shadow-lg flex items-center justify-center">
              <AiOutlineDollar size={32} />
            </div>
            <div className="pt-1 text-right">
              <p className="text-sm font-light capitalize">Total Revenue</p>
              <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
              {formattedTotalRevenue}
              </h4>
            </div>

            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                  {" "}
                  {formattedStartDate} to {formattedEndDate}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg p-3">
            <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-yellow-700 to-yellow-400 text-center text-white shadow-lg flex items-center justify-center">
              <AiOutlineCrown size={32} />
            </div>
            <div className="pt-1 text-right">
              <p className="text-sm font-light capitalize">Best Selling</p>
              <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                {bestSellingProduct}
              </h4>
            </div>
            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">
                  Best selling Product{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
