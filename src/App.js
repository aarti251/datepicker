// src/App.js
import React from 'react';
import RecurrenceOptions from './components/RecurrenceOptions';
import DatePicker from './components/DatePicker';
import DatePreview from './components/DatePreview';
import './index.css';

const App = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Date Picker with Recurrence</h1>
    <RecurrenceOptions />
    <DatePicker />
    <DatePreview />
  </div>
);

export default App;
