import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";

let refresh = false;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      try {
        const { data } = await axios.post(
          "refresh",
          {},
          { withCredentials: true }
        );

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data["token"]}`;

        return axios(error.config);
      } catch (refreshError) {
        console.error("Failed to refresh access token:", refreshError);
      } finally {
        refresh = false;
      }
    }

    return Promise.reject(error);
  }
);
