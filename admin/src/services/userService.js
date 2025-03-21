import axios from "axios";

export const createSocietyModeratorService = (data, token) => {
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/admin/create-society-user`;

  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
    },
  });
};
