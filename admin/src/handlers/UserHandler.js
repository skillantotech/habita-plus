

import toast from 'react-hot-toast';
import { createSocietyModeratorService, createSocietyResidentUserService, getResidentBySocietyIdService } from '../services/userService';
import { useSelector } from 'react-redux';
import ResponseHandler from './ResponseHandler';

const UserHandler = () => {
  const token = useSelector((state) => state.auth.token);
  const { handleResponse } = ResponseHandler();

  const createSocietyModeratorHandler = async (formData) => {
    try {

      return await createSocietyModeratorService(formData, token).then(res => {
        if (res.status === 201) {
          toast.success("Society Moderator created successfully !");
        }
      }).catch(err => {
        console.log(err);
        toast.error(err.message);
      })
    } catch (err) {
      console.error(err);
    }
  };


  const createSocietyResidentUserHandler = async (formData) => {
    try {

      return await createSocietyResidentUserService(formData, token).then(res => {
        if (res.status === 201) {
          toast.success("Society Resident created successfully!");
        }
      }).catch(err => {
        console.log(err);
        toast.error(err.message);
      })
    } catch (err) {
      console.error(err);
    }
  }

  const getResidentBySocietyIdHandler = async (societyId) => { 
    try {
      return await getResidentBySocietyIdService(societyId, token)
        .then((res) => res)
        .catch((err) => {
          console.error("Error fetching residents:", err);
          toast.error("Failed to fetch residents.");
        });
    } catch (err) {
      console.error("Error in handler:", err);
    }
  };
  
return { createSocietyModeratorHandler, createSocietyResidentUserHandler,getResidentBySocietyIdHandler };
};

export default UserHandler;