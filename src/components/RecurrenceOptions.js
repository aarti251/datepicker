// src/components/RecurrenceOptions.js
import React from 'react';
import { useStore } from '../store';

const RecurrenceOptions = () => {
  const { recurrencePattern, setRecurrencePattern, setRecurrenceInterval, setSpecificDays, setNthDay } = useStore();

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Recurrence Options</h2>
      <select
        value={recurrencePattern}
        onChange={(e) => setRecurrencePattern(e.target.value)}
        className="border rounded p-2 mt-2"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      {/* Add further customization options here */}
    </div>
  );
};

export default RecurrenceOptions;
