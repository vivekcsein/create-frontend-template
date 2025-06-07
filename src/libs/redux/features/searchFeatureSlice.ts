import axios from 'axios';
import { envFrontendHost } from '@/libs/configs/config.env';
import { getLocalStorageItem, setLocalStorageItem } from '@/libs/configs/config.helper';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDetails } from '@/types/products';


interface SearchState {
    isMainSearchOpen: boolean;
    searchStatus?: 'idle' | 'loading' | 'running' | 'succeeded' | 'stoped' | 'failed';
    searchQuery: string;
    recentSearches?: string[];
    trendingSearches?: ProductDetails[];
    fetchSearchData?: ProductDetails[];
    outputSearchData?: ProductDetails[];
}

const initialState: SearchState = {
    isMainSearchOpen: true,
    searchStatus: "idle",
    searchQuery: getLocalStorageItem('searchQuery', ""),
    recentSearches: getLocalStorageItem('recentSearches', []),
    trendingSearches: [],
    fetchSearchData: [],
    outputSearchData: []
};

const trendingSearchesURL = `${envFrontendHost.APP_FRONTEND_API_URL}/products/trendingproducts`;
const fetchSearchDataURL = `${envFrontendHost.APP_FRONTEND_API_URL}/products/fetchproducts`;

export const fetchTrendingSearches = createAsyncThunk("searchFeature/fetchTrendingSearches",
    async () => {
        const response = await axios.get(trendingSearchesURL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return response.data.productsList;
    }
);

export const fetchAllSearchData = createAsyncThunk("searchFeature/fetchSearchAPIData",
    async () => {
        const response = await axios.get(fetchSearchDataURL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return response.data.productsList;
    }
);

export const startSearching = createAsyncThunk(
    "searchFeature/startSearching",
    async (searchQuery) => {
        const response = await axios.get(`${envFrontendHost.APP_FRONTEND_API_URL}/products/search`, {
            params: { q: searchQuery },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return response.data.productsList;
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
            .addCase(fetchTrendingSearches.fulfilled, (state, action: PayloadAction<ProductDetails[]>) => {
                state.trendingSearches = action.payload;
            })
            .addCase(fetchTrendingSearches.rejected, (state, action) => {
                console.error('Failed to fetch trending searches:', action.error);
            });
        builder
            .addCase(fetchAllSearchData.pending, (state) => {
                // Optionally handle loading state
            })
            .addCase(fetchAllSearchData.fulfilled, (state, action: PayloadAction<ProductDetails[]>) => {
                state.fetchSearchData = action.payload;
            })
            .addCase(fetchAllSearchData.rejected, (state, action) => {
                console.error('Failed to fetch search API data:', action.error);
            });
        builder
            .addCase(startSearching.pending, (state) => {
                // Optionally handle loading state
            })
            .addCase(startSearching.fulfilled, (state, action: PayloadAction<ProductDetails[]>) => {
                state.outputSearchData = action.payload;
            })
            .addCase(startSearching.rejected, (state, action) => {
                console.error('Failed to fetch output search API data:', action.error);
            });
    },
});

export const { setSearchQuery, toggleMainSearch, openMainSearch, closeMainSearch, loadSearchQuery } = searchFeatureSlice.actions;

export default searchFeatureSlice.reducer;