import toast from 'react-hot-toast';
import { createSocietyModeratorService } from '../services/userService';
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

  return { createSocietyModeratorHandler };
};

export default UserHandler;
