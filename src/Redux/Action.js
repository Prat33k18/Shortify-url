import { url } from "../API Config/Config";
import {
  GET_OG_URL_FAILURE,
  GET_OG_URL_REQUEST,
  GET_OG_URL_SUCCESS,
  SHORT_URL_FAILURE,
  SHORT_URL_REQUEST,
  SHORT_URL_SUCCESS,
} from "./ActionType";

export const shortUrl = (originalUrl) => async (dispatch) => {
  dispatch({ type: SHORT_URL_REQUEST });
  console.log("Initiated");

  try {
    const { data } = await url.post(`/shorten`, { originalUrl});
    dispatch({ type: SHORT_URL_SUCCESS, payload: data });
    console.log("Short URL Success:", data);
  } catch (error) {
    console.error("Short URL Failure:", error.message);
    dispatch({ type: SHORT_URL_FAILURE, payload: error.message });
  }
};

export const Redirecter = (shortcode) => async (dispatch) => {
  dispatch({ type: GET_OG_URL_REQUEST });
  console.log("Redirecter Initiated");

  try {
      const redirectUrl = `http://localhost:8787/redirect/${shortcode}`;
      window.open(redirectUrl,"_blank"); 

      dispatch({ type: GET_OG_URL_SUCCESS, payload: redirectUrl });
  } catch (error) {
      console.error("Get Original URL Failure:", error.message);
      dispatch({ type: GET_OG_URL_FAILURE, payload: error.message });
  }
};

  
