import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: "",
    key: "",
    non_field_errors: "",
    isAuthenticated: false,
    detail: "",
    userdata: [],
    updateddata: [],
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
});

export default authSlice.reducer;