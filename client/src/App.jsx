import { useEffect, useState } from "react";
import SalesTable from "./components/table/SalesTable";
import { useDispatch } from "react-redux";
import { fetchSales } from "./redux/features/salesSlice";
import SalesChart from "./components/chart/SalesChart";
import Statistic from "./components/table/Statistic";
import DateFilter from "./components/ui/DateFilter";
import SearchBar from "./components/ui/SearchBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Sales Dashboard</h1>
        <div className="mb-4">
          <Statistic />
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <SalesChart />
          </div>
        </div>
        <div className="w-full overflow-x-auto mb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <DateFilter />
            <SearchBar />
          </div>
          <SalesTable />
        </div>
      </div>
    </>
  );
}

export default App;
