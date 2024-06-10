import { useEffect, useState } from "react";
import SalesTable from "./components/table/SalesTable";
import { useDispatch } from "react-redux";
import { fetchSales } from "./redux/features/salesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Sales Dashboard</h1>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
