import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  bookings: any[];
}

const initialState: BookingState = {
  bookings: [],
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<any>) => {
      state.bookings.push(action.payload);
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;