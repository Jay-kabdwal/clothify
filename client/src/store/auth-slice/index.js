import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    isAuthentaicated: false,
    isLoading: false,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initailState,
    reducers: {
        setUser :(state, action) => {

        }

    }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;