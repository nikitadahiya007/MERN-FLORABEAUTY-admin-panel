import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product ",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    getProductSucess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductfailure: (state) => {
      state.isFetching = false;
      state.products = true;
    },
    deleteProductStart: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    deleteProductSucess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductfailure: (state) => {
      state.isFetching = false;
      state.products = true;
    },
    updateProductStart: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    updateProductSucess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ]=action.payload.product;
    },
    updateProductfailure: (state) => {
      state.isFetching = false;
      state.products = true;
    },
    addProductStart: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    addProductSucess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload)
    },
    addProductfailure: (state) => {
      state.isFetching = false;
      state.products = true;
    },
  },
});

export const {
  getProductStart,
  getProductSucess,
  getProductfailure,
  deleteProductStart,
  deleteProductSucess,
  deleteProductfailure,
  updateProductStart,
  updateProductSucess,
  updateProductfailure,addProductStart,
  addProductSucess,
  addProductfailure,
} = productSlice.actions;
export default productSlice.reducer;
