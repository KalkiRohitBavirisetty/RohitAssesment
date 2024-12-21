// redux/reviewSlice.js
import { createSlice } from '@reduxjs/toolkit';

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {},
  reducers: {
    addReview: (state, action) => {
      const { productId, review } = action.payload;
      if (!state[productId]) {
        state[productId] = [];
      }
      state[productId].push(review);
    },
  },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
