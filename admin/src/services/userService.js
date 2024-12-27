

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

export const createSocietyResidentUserService = (data, token) =>{
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/users/create-resident`;

  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
    },
  });
}

export const getResidentBySocietyIdService = (societyId, token) => {
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/users/resident/${societyId}`;

  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
