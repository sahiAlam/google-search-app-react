import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyDI6yn4m4Sb8g3qORJu0y_Kl9ap7yX1P_E",
  cx: "35bbe38af33b64a38",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      ...params,
      ...payload,
    },
  });

  return data;
};
