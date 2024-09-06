// src/components/DatePicker.js
import React from 'react';
import { useStore } from '../store';

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useStore();

  const handleStartDateChange = (e) => setStartDate(new Date(e.target.value));
  const handleEndDateChange = (e) => setEndDate(new Date(e.target.value));

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Select Dates</h2>
      <input
        type="date"
        value={startDate.toISOString().split('T')[0]}
        onChange={handleStartDateChange}
        className="border rounded p-2 mt-2"
      />
      <input
        type="date"
        value={endDate ? endDate.toISOString().split('T')[0] : ''}
        onChange={handleEndDateChange}
        className="border rounded p-2 mt-2"
      />
    </div>
  );
};

export default DatePicker;
