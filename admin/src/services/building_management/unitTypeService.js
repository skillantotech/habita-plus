import axios from "axios";

export const createUnitTypeService = (data, token) => {
  console.log(data);
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/unitType`;

  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
export const getUnitTypeService = (data, token) => {
  console.log(data);
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/unitType`;

  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    query: { data },
  });
};
