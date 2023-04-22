import {
  ORDER_CREATE_REQUEST, 
  ORDER_CREATE_SUCCESS, 
  ORDER_CREATE_FAIL
} from '../constants/orderConstants'
import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST
    })

    const { userLogin: {userInfo}} = getState() 

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const {data} = await axios.post(`${API_BASE_URL}/api/orders`, order, config)

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data
    })
  } catch(error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
    })
  }
}