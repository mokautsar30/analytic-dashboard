import { useEffect, useState } from "react";
import SalesTable from "./components/table/SalesTable";
import { useDispatch } from "react-redux";
import { fetchSales } from "./redux/features/salesSlice";
import SalesChart from "./components/chart/SalesChart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Sales Dashboard</h1>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <SalesChart />
      </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
