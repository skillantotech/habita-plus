
import axios from "axios";

export const getvisitorEntryService = (token) => {
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/visitormanagement/createvisitortype`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createvisitorEntryService = (data, token) => {
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/visitormanagement/visitornewvisitentry`;
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getVisitorEntryTableService = (data, token) => {
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/visitormanagement/visitorlisttable`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: data,
  });
};
