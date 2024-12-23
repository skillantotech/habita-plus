import axios from "axios";

export const createFloorService = (data, token) => {
  console.log(data);
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/floor`;

  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getFloorService = (data, token) => {
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/floor`;

  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    query: { data },
  });
};
