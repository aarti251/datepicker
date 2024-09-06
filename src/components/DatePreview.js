// src/components/DatePreview.js
import React from 'react';
import { useStore } from '../store';

const generatePreviewDates = (startDate, endDate, recurrencePattern) => {
  // Implement date generation logic here based on the recurrencePattern
  // This is a placeholder function
  return [];
};

const DatePreview = () => {
  const { startDate, endDate, recurrencePattern } = useStore();
  const dates = generatePreviewDates(startDate, endDate, recurrencePattern);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Date Preview</h2>
      <ul>
        {dates.map((date, index) => (
          <li key={index}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default DatePreview;
