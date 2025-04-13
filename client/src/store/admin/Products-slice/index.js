import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const result = await axios.get(
      "http://localhost:5000/api/admin/products/get"
    );
    return result?.data;
  }
);

export const addNewProduct = createAsyncThunk(
  "products/addProduct",
  async (FormData) => {
    const result = await axios.post(
      "http://localhost:5000/api/admin/products/add",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, FormData }) => {
    const result = await axios.put(
      `http://localhost:5000/api/admin/products/edit/${id}`,
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/products/delete/${id}`)
  }
);

const initialState = {
  isLoading: false,
  productList: [],
};

const AdminProductsSlice = createSlice({
  name: "adminproducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList=[];
      });
  },
});

export default AdminProductsSlice.reducer;
