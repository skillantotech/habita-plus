import axios from "axios";

export const gateUserListService = (data, token, societyId) => {

    const url = `${process.env.REACT_APP_PUBLIC_API_URL}/jobprofile/society/${societyId}`;

    return axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: data,
        })
        .then((res) => {
            // console.log("Response:", res.data);
            return res.data;
        })
        .catch((err) => {
            console.error("API Error:", err.response || err.message);
            throw err; // Propagate the error for further handling.
        });
};


export const GuardUserCreationService = (data, token) => {
    const url = `${process.env.REACT_APP_PUBLIC_API_URL}/jobprofile/create`;

    console.log("Passed Data: ",data);
    const formData = new FormData();
    console.log(typeof(formData));
    
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("mobileNo", data.mobileNo);
    formData.append("societyId", data.societyId);
    formData.append("roleId", data.roleId);
    formData.append("status", "active");

    console.log(formData.firstName);

    if (data.profilePhoto) {
        formData.append("profilePhoto", data.profilePhoto);
    }
    if (data.idProof) {
        formData.append("idProof", data.idProof);
    }

    console.log("Submitting data to:", url, "Payload:", formData);

    return axios.post(url, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    });
};