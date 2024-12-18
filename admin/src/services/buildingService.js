import axios from "axios";

export const createBuildingService = (data, token) => {
    console.log(data);
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/building`;

  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
export const getBuildingService = (data, token) => {
  console.log(data);
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/building`;

  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      },
      query:{data}
  });
};

