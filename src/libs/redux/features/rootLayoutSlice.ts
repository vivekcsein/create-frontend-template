
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { envAPI_LAYOUT_DATA } from '@/libs/configs/config.env';

const URL = envAPI_LAYOUT_DATA.rootLayoutAPI as string;

export const fetchData = async (URL: string) => {
    const thunk = createAsyncThunk(URL,
        async () => {
            const response = await axios.get(URL);
            return response.data;
        }
    );
    return thunk;
}

type stateType = {
    rootLayoutData: rootLayoutData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    // error: Error | null;
};

const initialState: stateType = {
    rootLayoutData: [],
    status: 'idle',
    // error: Error,
};

const rootLayoutSlice = createSlice({
    name: 'rootLayoutData',
    initialState,
    reducers: {},
    extraReducers: async (builder) => {
        if (!URL) {
            return builder
        }
        const data = fetchData(URL);
        builder
            .addCase((await data).pending, (state) => {
                state.status = 'loading';
            })
            .addCase((await data).fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.rootLayoutData = action.payload;
            })
            .addCase((await data).rejected, (state, action) => {
                state.status = 'failed';
                // state.error = action.error;
            });
    },
});

export const getrootLayoutData = (state: stateType) => state.rootLayoutData;
export const getrootLayoutDataStatus = (state: stateType) => state.status;
// export const getHeaderDataError = (state: stateType) => state.error;

export default rootLayoutSlice.reducer;