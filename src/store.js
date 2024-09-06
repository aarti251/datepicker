// src/store.js
import create from 'zustand';

export const useStore = create((set) => ({
  recurrencePattern: 'daily', // default pattern
  recurrenceInterval: 1, // every X days/weeks/months/years
  specificDays: [], // e.g., [1, 3] for specific days of the week
  nthDay: null, // e.g., { week: 2, day: 3 } for the second Tuesday
  startDate: new Date(),
  endDate: null,
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setRecurrenceInterval: (interval) => set({ recurrenceInterval: interval }),
  setSpecificDays: (days) => set({ specificDays: days }),
  setNthDay: (day) => set({ nthDay: day }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));
