import axios from "axios";


export const GuardUserCreationService = (societyId,data, token) => {
    const url = `${process.env.REACT_APP_PUBLIC_API_URL}/jobprofile/create/${societyId}`;
    return axios.post(url, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    });
};