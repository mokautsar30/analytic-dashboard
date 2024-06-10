import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDateRange } from "../../redux/features/salesSlice";

const DateFilter = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.sales);

  const handleStartDateChange = (e) => {
    dispatch(setDateRange({ startDate: e.target.value, endDate }));
  };

  const handleEndDateChange = (e) => {
    dispatch(setDateRange({ startDate, endDate: e.target.value }));
  };

  return (
    <div className="flex mb-4">
      <label className="ml-4">
        Start Date:
        <input
          type="date"
          className="ml-2 border rounded-md"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </label>
      <label className="ml-4">
        End Date:
        <input
          type="date"
          className="ml-2 border rounded-md"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </label>
    </div>
  );
};

export default DateFilter;
