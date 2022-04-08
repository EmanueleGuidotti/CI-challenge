import axios from "axios";

export const axiosApiInstance = axios.create({
  crossDomain: true,
  baseURL: "https://api.themoviedb.org/3/",
});

axiosApiInstance.interceptors.request.use(
  (config) => {
    const configMod = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGI4ODc1OWU1NWJiYzA4ODE3NjI2YjdhOTI3NGQxZSIsInN1YiI6IjYyNDgzNTY0MTVhNGExMDA2Mzc4M2IzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CwtlAKr7NC3CqMspSAQf2irHS5vY48zMoYsNVdTdADo`,
        Accept: "application/json",
        "Content-Type": config.headers.contentType ?? "application/json",
      },
    };
    return configMod;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Custom axios base query for redux RTK
 * @param res
 * @return {Promise<{data: AxiosResponse<any>}>}
 */
export const axiosBaseQuery = async (res) => {
  const { url, method = "GET", body } = res;

  try {
    const result = await axiosApiInstance({
      url,
      method,
      data: JSON.stringify(body),
      responseType: "json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    return { data: result };
  } catch (axiosError) {
    return {
      status: axiosError.response?.status,
      data: axiosError.response?.data,
    };
  }
};
