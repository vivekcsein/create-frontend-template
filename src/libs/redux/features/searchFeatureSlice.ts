import { envFrontendHost } from '@/libs/configs/config.env';
import { getLocalStorageItem, setLocalStorageItem } from '@/libs/configs/config.helper';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


interface SearchState {
    isMainSearchOpen: boolean;
    searchQuery: string;
    recentSearches?: string[];
    trendingSearches?: string[];
    searchStatus?: 'idle' | 'loading' | 'succeeded' | 'failed';
    searchData?: string[];
}

const initialState: SearchState = {
    isMainSearchOpen: true,
    searchQuery: getLocalStorageItem('searchQuery', ""),
    recentSearches: getLocalStorageItem('recentSearches', []),
    trendingSearches: [],
    searchData: [],
};

const trendingSearchesURL = `${envFrontendHost.APP_FRONTEND_API_URL}/trending-searches`;
const fetchSearchDataURL = `${envFrontendHost.APP_FRONTEND_API_URL}/products/fetchproducts`;

export const fetchTrendingSearches = createAsyncThunk("searchFeature/fetchTrendingSearches",
    async () => {
        const response = await axios.get(trendingSearchesURL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return response.data;
    }
);

export const fetchSearchData = createAsyncThunk("searchFeature/fetchSearchAPIData",
    async () => {
        const response = await axios.get(fetchSearchDataURL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return response.data;
    }
);

const searchFeatureSlice = createSlice({
    name: 'searchFeature',
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
            setLocalStorageItem('searchQuery', action.payload);
        },
        toggleMainSearch(state) {
            state.isMainSearchOpen = !state.isMainSearchOpen;
        },
        openMainSearch(state) {
            state.isMainSearchOpen = true;
        },
        closeMainSearch(state) {
            state.isMainSearchOpen = false;
        },
        loadSearchQuery(state) {
            state.searchQuery = getLocalStorageItem('searchQuery', "");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingSearches.pending, (state) => {
                // Optionally handle loading state
            })
            .addCase(fetchTrendingSearches.fulfilled, (state, action: PayloadAction<string[]>) => {
                state.trendingSearches = action.payload;
            })
            .addCase(fetchTrendingSearches.rejected, (state, action) => {
                console.error('Failed to fetch trending searches:', action.error);
            });
        builder
            .addCase(fetchSearchData.pending, (state) => {
                // Optionally handle loading state
            })
            .addCase(fetchSearchData.fulfilled, (state, action: PayloadAction<string[]>) => {
                state.searchData = action.payload;
            })
            .addCase(fetchSearchData.rejected, (state, action) => {
                console.error('Failed to fetch search API data:', action.error);
            });
    },

});

export const { setSearchQuery, toggleMainSearch, openMainSearch, closeMainSearch, loadSearchQuery } = searchFeatureSlice.actions;

export default searchFeatureSlice.reducer;