import axios from "axios";

export const createDefineUnitService = (data, token) => {
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/unit`;
  console.log(data);
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getUnitsServices = (data, token) => {
  console.log(data);
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/unit`;
  console.log(data);
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: data,
  });
};
