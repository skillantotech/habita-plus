import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL; // Make sure this is defined in your `.env.local`

export const createDocumentBySocietyService = (formData, societyId, token) => {
  const url = `${API_URL}/documents/society/${societyId}`;
  return axios.post(url, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const createDocumentByUserService = (formData, userId, token) => {
  const url = `${API_URL}/documents/user/${userId}`;
  return axios.post(url, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getDocumentBySocietyService = (societyId, token) => {
  const url = `${API_URL}/documents/society/${societyId}`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getDocumentByUserService = (userId, token) => {
  const url = `${API_URL}/documents/user/${userId}`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateDocumentBySocietyService = (formData, documentId, token) => {
  const url = `${API_URL}/documents/society/${documentId}`;
  return axios.put(url, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateDocumentByUserService = (formData, documentId, token) => {
  const url = `${API_URL}/documents/user/${documentId}`;
  return axios.put(url, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteDocumentService = (documentId, token) => {
  const url = `${API_URL}/documents/${documentId}`;
  return axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


