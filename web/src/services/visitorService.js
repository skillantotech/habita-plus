import axios from "axios";

export const createvisitorEntryService = (data, token) => {
    console.log("createvisitorEntryService", data);
  const url = `${process.env.REACT_APP_PUBLIC_API_URL}/visitormanagement/new-visit-entry`;
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

