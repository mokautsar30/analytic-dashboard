import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    sales: [],
    loading: false,
    error: '',
    searchTerm: '',
    startDate: '',
    endDate: '',
};

const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setDateRange: (state, action) => {
            state.startDate = action.payload.startDate;
            state.endDate = action.payload.endDate;
        },
        fetchSalesStart: (state, action) => {
            state.loading = true;
            state.error = ''
        },
        fetchSalesSuccess: (state, action) => {
            state.loading = false;
            state.sales = action.payload;
        },
        fetchSalesFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    },
});

export const {
    setSearchTerm,
    setDateRange,
    fetchSalesStart,
    fetchSalesSuccess,
    fetchSalesFail,
} = salesSlice.actions


export const fetchSales = () => async (dispatch) => {
    dispatch(fetchSalesStart());
    try {
        const response = await axios.get('http://localhost:3001/sales');
        dispatch(fetchSalesSuccess(response.data))
    } catch (error) {
        dispatch(fetchSalesFail(error.message))
    }
};

export default salesSlice.reducer;