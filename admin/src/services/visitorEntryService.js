import axios from "axios";

export const getvisitorEntryService = (token) => {
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/visitormanagement/createvisitortype`;

  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    // params: data,
  });
};

export const createvisitorEntryService = (data, token) => {
  //   console.log("createvisitorEntryService", data);
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/visitormanagement/visitornewvisitentry`;
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getVisitorEntryTableService = (data, token) => {
  console.log("visitor table created");
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/visitormanagement/visitorlisttable`;

  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: data,
  });
};
