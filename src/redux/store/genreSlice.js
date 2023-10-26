import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncGenres } from "../utils/genreUtils";

const initialState = {
  genres: [],
  genresStatus: STATUS.IDLE,
};

const genresSlice = createSlice({
  name: "genre",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGenres.pending, (state) => {
      state.genresStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncGenres.rejected, (state) => {
      state.genresStatus = STATUS.FAILED;
    });
  },
  reducers: {},
});
export { fetchAsyncGenres };
export const selectAllGenres = (state) => state.genre.genres.results;
export const selectAllGenresStatus = (state) => state.genre.genresStatus;

export default genresSlice.reducer;
