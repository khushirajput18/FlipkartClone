import axios from "axios";
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from "../constant/projectConstant";
import *as actionTypes from "../constant/projectConstant";

const URL = 'http://localhost:8000';

export const getProducts = () => {
  return async (dispatch) => {  // Wrap in a function that returns another function
    try {
      const { data } = await axios.get(`${URL}/products`);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      console.log('error calling getProduct api', error.message);
      dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message });
    }
  };
};

export const getProductDetailes=(id)=>async(dispatch)=>{
  try {
    dispatch({type:actionTypes.GET_PRODUCT_DETAILES_REQUEST});
    const {data}=await axios.get(`${URL}/product/${id}`);
    dispatch({type: actionTypes.GET_PRODUCT_DETAILES_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type: actionTypes.GET_PRODUCT_DETAILES_FAIL,payload:error.message})
  }
}