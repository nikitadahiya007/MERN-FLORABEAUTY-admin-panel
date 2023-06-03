import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestsMethods";
import {
  getProductStart,
  getProductSucess,
  getProductfailure,
  deleteProductStart,
  deleteProductSucess,
  deleteProductfailure,
  updateProductStart,
  updateProductSucess,
  updateProductfailure,
  addProductStart,
  addProductSucess,
  addProductfailure,
} from "./productRedux";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSucess(res.data));
    // console.log(res.data);
  } catch (error) {
    dispatch(getProductfailure());
  }
};
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSucess(id));
    console.log(res.data);
  } catch (error) {
    dispatch(deleteProductfailure());
  }
};
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
      const res = await userRequest.put(`/products/${id}`,{product});
    dispatch(updateProductSucess({ id: id, product: product }));
  } catch (error) {
    dispatch(updateProductfailure());
  }
};
export const addProduct = async (product, dispatch) => {
    dispatch(updateProductStart());
    try {
      const res = await userRequest.post(`/products`,{product});
      dispatch(updateProductSucess(res.data));
      console.log(res.data);
    } catch (error) {
      dispatch(updateProductfailure());
    }
  };

