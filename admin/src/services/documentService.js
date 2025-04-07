import axios from "axios";

const API_BASE = process.env.REACT_APP_PUBLIC_API_URL;

// Create document by society ID
export const createDocumentBySocietyId = (societyId, data, token) => {
  const url = `${API_BASE}/documents/society/${societyId}`;
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// Create document by user ID
export const createDocumentByUserId = (userId, data, token) => {
  const url = `${API_BASE}/documents/user/${userId}`;
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// Get documents by society ID
export const getDocumentsBySocietyId = (societyId, token, queryParams = {}) => {
  const url = `${API_BASE}/documents/society/${societyId}`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: queryParams,
  });
};

// // Get documents by user ID
export const getDocumentsByUserId = (userId, token, queryParams = {}) => {
  const url = `${API_BASE}/documents/user/${userId}`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: queryParams,
  });
};



// DELETE document by ID
export const deleteDocumentById = (documentId, token) => {
    const url = `${API_BASE}/documents/${documentId}`;
    return axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  
  // PUT (update) document by ID
  export const updateDocumentById = (societyId, data, token) => {
    const url = `${API_BASE}/documents/${societyId}`;
    return axios.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };
  