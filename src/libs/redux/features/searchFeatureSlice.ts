import axios from 'axios';
import { envFrontendHost } from '@/libs/configs/config.env';
import { getLocalStorageItem, setLocalStorageItem } from '@/libs/configs/config.helper';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDetails } from '@/types/products';

interface SearchState {
    isMainSearchOpen: boolean;
    searchStatus?: 'idle' | 'thinking' | 'typing' | 'querying' | 'succeeded' | 'failed' | 'stopped';
    searchQuery: string;
    recentSearches?: string[];
    trendingSearches?: string[];
    fetchSearchData?: string[];
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
    async (searchQuery: string) => {
        const response = await axios.get(`${envFrontendHost.APP_FRONTEND_API_URL}/products/searchproducts`, {
            params: { query: searchQuery },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        // console.log(response.data.productsList);
        return response.data.productsList;
    }
);

const searchFeatureSlice = createSlice({
    name: 'searchFeature',
    initialState,
    reducers: {

        clearSearchQuery(state, action: PayloadAction<string>) {
            // console.log(" user is now idle ");
            state.searchStatus = "idle"
            state.searchQuery = action.payload;
            setLocalStorageItem('searchQuery', "");
        },

        startSearchThinking(state, action: PayloadAction<string>) {
            // console.log("user is now start thinking to search something ");
            state.searchStatus = "thinking"
            state.searchQuery = action.payload;
            setLocalStorageItem('searchQuery', "");
        },

        setSearchQuery(state, action: PayloadAction<string>) {
            // console.log("user is typing : " + action.payload);
            state.searchStatus = "typing"
            state.searchQuery = action.payload;
            setLocalStorageItem('searchQuery', action.payload);
        },

        chooseSearchQuery(state, action: PayloadAction<string>) {
            // console.log("Now user started query to search : " + action.payload);
            state.searchStatus = "querying"
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
            .addCase(fetchAllSearchData.pending, (state) => {
                state.searchStatus = "querying";
                // Optionally handle loading state
            })
            .addCase(fetchAllSearchData.fulfilled, (state, action: PayloadAction<string[]>) => {
                state.searchStatus = "succeeded";
                state.fetchSearchData = action.payload;
            })
            .addCase(fetchAllSearchData.rejected, (state, action) => {
                state.searchStatus = "failed";
                console.error('Failed to fetch search API data:', action.error);
            });
        builder
            .addCase(startSearching.pending, (state) => {
                // Optionally handle loading state
                state.searchStatus = "querying";
            })
            .addCase(startSearching.fulfilled, (state, action: PayloadAction<ProductDetails[]>) => {
                state.searchStatus = "idle";
                state.outputSearchData = action.payload;
            })
            .addCase(startSearching.rejected, (state, action) => {
                state.searchStatus = "failed";
                console.error('Failed to fetch output search API data:', action.error);
            });
    },
});

export const { clearSearchQuery, startSearchThinking, setSearchQuery, chooseSearchQuery, toggleMainSearch, openMainSearch, closeMainSearch, loadSearchQuery } = searchFeatureSlice.actions;

export default searchFeatureSlice.reducer;