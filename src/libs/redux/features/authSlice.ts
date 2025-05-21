import { AuthServerList } from "@/libs/configs/config.serverList";
import { IuserInfo } from "@/types/users";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Axios instance for API requests
const api = axios.create({
    baseURL: AuthServerList.baseURL,
    withCredentials: true, // Send cookies (httpOnly)
});

// Thunk for user sign-in
export const signIn = createAsyncThunk(
    "auth/signIn",
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await api.post(AuthServerList.signIn[0], { email, password });
            return response.data.user; // Adjust according to your backend response
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Sign in failed");
        }
    }
);

// Thunk to fetch current user (on page refresh)
export const fetchUser = createAsyncThunk(
    "auth/fetchUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(AuthServerList.signIn[1]);
            // console.log("user is authenticated");
            return response.data.user;
        } catch (err: any) {
            try {
                await api.post(AuthServerList.signIn[2]);
                const res = await api.get(AuthServerList.signIn[1]);
                return res.data;
            } catch (error) {
                return rejectWithValue("session expired");
            }
        }
    }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
    await api.post("/signout");
});

// Thunk to refresh access token
export const refreshToken = createAsyncThunk(
    "auth/refreshToken",
    async (_, { rejectWithValue }) => {
        try {
            // Sets new access token in httpOnly cookie
            await api.post(AuthServerList.signIn[2]);
            // Optionally, fetch user info again
            const response = await api.get(AuthServerList.signIn[1]);
            return response.data.user;
        } catch (err: any) {
            await api.post("/signout");
            return rejectWithValue(null);
        }
    }
);

// Axios interceptor to refresh token on 401
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            try {
                await api.post(AuthServerList.signIn[2]);
                return api(originalRequest);
            } catch (refreshError) {
                // Optionally: dispatch logout or handle error
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

interface AuthState {
    user: null | IuserInfo;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // signIn
            .addCase(signIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.isAuthenticated = false;
            })
            // fetchUser
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = !!action.payload;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            // refreshToken
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = !!action.payload;
            })
            .addCase(refreshToken.rejected, (state) => {
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(signOut.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
            });
    },
});

// export const { signOut } = authSlice.actions;
export default authSlice.reducer;
export { api as authApi };