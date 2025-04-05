import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null
};

export const registerUser = createAsyncThunk("/auth/register", async (formData) => {
    const res = await axios.post("http://localhost:5000/api/auth/register", formData, {
        withCredentials: true,
    }
    );
    return res.data;
});



export const LoginUser = createAsyncThunk(
    "/auth/Login",

    async (formData) => {
        const res = await axios.post("http://localhost:5000/api/auth/login", formData, {
            withCredentials: true,
        }
        );
        return res.data;
    }
);

export const checkAuth = createAsyncThunk(
    "/auth/checkauth",

    async () => {
        const res = await axios.get("http://localhost:5000/api/auth/check-auth", {
            withCredentials: true,
            headers: {
                "cache-Control": "no-store,no-cache,must-revalidate,proxy-revalidate",
            }
        }
        );
        return res.data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {

        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(registerUser.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(LoginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(LoginUser.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            });
    }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;