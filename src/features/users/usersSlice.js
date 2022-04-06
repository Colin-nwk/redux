import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Zenolesky" },
  { id: "1", name: " collins" },
  { id: "2", name: "Dave" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
