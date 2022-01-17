import axios from "axios";
import { apiCallStart, apiCallSuccess, apiCallFailed } from "./apiActions";

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallStart.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) {
      dispatch({ type: onStart });
    }
    let source = axios.CancelToken.source();
    next(action);
    try {
      //make api call and get response data
      const response = await axios.request({
        url,
        method,
        data,
        cancelToken: source.token,
      });

      //dispatch on success action from the reducer/slices
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (error) {
      //dispatch on error if the api request was failed
      if (onError) {
        dispatch({ type: onError, payload: error.message });
      }
    }
  };

export default apiMiddleware;
