
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { envAPI_LAYOUT_API } from '@/libs/configs/config.env';
import { RootState } from '../store';

const URL = envAPI_LAYOUT_API.rootLayoutAPI as string;

export const fetchRootLayout = createAsyncThunk("rootLayout/fetchRootLayout",
    async () => {
        const response = await axios.get(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return response.data;
    }
);

type stateType = {
    rootLayoutData: rootLayoutData | null;
    headerData: HeaderData | null;
    footerData: FooterData | null;
    productsData: productsData | null;
    gameData: gameData | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: Error | null;
};

const initialState: stateType = {
    rootLayoutData: null,
    headerData: null,
    footerData: null,
    productsData: null,
    gameData: null,
    status: 'idle',
    error: null,
};

const rootLayoutSlice = createSlice({
    name: 'rootLayout',
    initialState,
    reducers: {
        getHeaderData: (state, action) => {
            if (action.payload) {
                state.rootLayoutData = action.payload;
                state.headerData = initialState.headerData;
            }
        },
        getFooterData: (state, action) => {
            if (action.payload) {
                state.rootLayoutData = action.payload;
                state.footerData = initialState.footerData;
            }
        },
        getProductsData: (state, action) => {
            if (action.payload) {
                state.rootLayoutData = action.payload;
                state.rootLayoutData = initialState.rootLayoutData;
            }
        },
        getHeaderDataError: (state, action) => {
            if (action.payload) {
                state.error = action.payload;
                state.error = initialState.error;
            }
        }
    },
    extraReducers: async (builder) => {
        if (!URL) {
            return builder
        }
        builder
            .addCase(fetchRootLayout.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRootLayout.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.rootLayoutData = action.payload.rootLayoutData;
                state.headerData = action.payload.rootLayoutData.HeaderData;
                state.footerData = action.payload.rootLayoutData.FooterData;
                state.productsData = action.payload.rootLayoutData.productsData;
                state.gameData = action.payload.rootLayoutData.gameData;
            })
            .addCase(fetchRootLayout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error as Error;
                console.error('Error fetching root layout data:', action.error);
            });
    },
});

export const getrootLayout = (state: RootState) => state.rootLayout;
export const getrootLayoutData = (state: RootState) => state.rootLayout.rootLayoutData;
export const getrootLayoutDataStatus = (state: RootState) => state.rootLayout.status;
export const getHeaderDataError = (state: RootState) => state.rootLayout.error;

export default rootLayoutSlice.reducer;