import toast from 'react-hot-toast';
import {
  createSocietyModeratorService,
  createSocietyResidentService,
  getResidentBySocietyIdService,
  getUserByIdService,
  getAllUserDataService,approveUserService,rejectUserService,
} from '../services/userService';
import { useSelector } from 'react-redux';
import ResponseHandler from './ResponseHandler';

const UserHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const { handleResponse } = ResponseHandler();

  // Create Society Moderator Handler
  const createSocietyModeratorHandler = async (formData) => {
    try {
      const response = await createSocietyModeratorService(formData, token);
      if (response.status === 201) {
        toast.success("Society Moderator created successfully!");
      }
    } catch (error) {
      console.error("Error creating moderator:", error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // Create Society Resident User Handler
const createSocietyResidentUserHandler = async (societyId, formData) => {
  try {
    const response = await createSocietyResidentService(societyId, token, formData);
    if (response.status === 201) {
      toast.success("Society Resident created successfully!");
    }
  } catch (error) {
    console.error("Error creating resident:", error);
    toast.error(error.response?.data?.message || error.message);
  }
};



const getResidentBySocietyIdHandler = async (societyId, token, { page, pageSize }) => {
  try {
    // Call the service with the appropriate parameters
    const response = await getResidentBySocietyIdService(societyId, token, { page, pageSize });

    return response.data;  // Return the response data
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

  // Get All User Data Handler
  const getAllUserDataHandler = async (token) => {
    try {
      const response = await getAllUserDataService(token);
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

 const getUserByIdHandler = async (id, token) => {
    try {
      const response = await getUserByIdService(id, token);  
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      return null;
    }
  };

const approveUserHandler = async (userId, unitId) => {
  try {
    const response = await approveUserService(userId, unitId, token);
    if (response.status === 200) {
      toast.success("User approved successfully!");
  
    }
  } catch (error) {
    console.error("Error approving user:", error);
    toast.error(error.response?.data?.message || error.message);
  }
};

  const rejectUserHandler = async (userId) => {
    try {
      const response = await rejectUserService(userId, token);
      if (response.status === 200) {
        toast.success("User rejected successfully!");
      }
    } catch (error) {
      console.error("Error rejecting user:", error);
      toast.error(error.response?.data?.message || error.message);
    }
  };






  return {
    createSocietyModeratorHandler,
    createSocietyResidentUserHandler,
    getResidentBySocietyIdHandler,
    getUserByIdHandler,
    getAllUserDataHandler,
    approveUserHandler,
    rejectUserHandler,
  };
};

export default UserHandler;
