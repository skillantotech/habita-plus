// "use client";
// import { useDispatch } from "react-redux";
// import { toast } from "react-hot-toast";
// import axios from "axios";
// import { clearAuth, setToken, setUser } from "../redux/slices/authSlice";
// import NavigationHandler from "./NavigationHandler";

// const AuthHandler = () => {
//   const dispatch = useDispatch();
//   const { customNavigation } = NavigationHandler();

//   const loginHandler = async (token) => {
//     try {
//       await axios
//          //.post("http://localhost:5000/api/auth/token-signin", { token })
//         .post(`${process.env.REACT_APP_PUBLIC_API_URL}/auth/token-signin`,{token})
//         .then((res) => {
//           console.log(res);
//           setReduxAuthState(res.data);
//           setLocalStorage(res.data);
//           toast.success("Successfully logged in!");
//           customNavigation('/');
//           return;
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//       console.log("end f catch block");
//     } catch (error) {
//       console.log(error.message);
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   const setLocalStorage = ({ user, token }) => {
//     console.log("set local storage!");
//     const storageData = { token, user };
//     localStorage.setItem("authData", JSON.stringify(storageData));
//   };

//   const setReduxAuthState = ({ user, token }) => {
//     console.log("set redux storage!");
//     dispatch(setUser(user));
//     dispatch(setToken(token));
//   };

//   const getLocalStorage = () => {
//     const storageData = localStorage.getItem("authData");
//     if (storageData) return JSON.parse(storageData);
//     else return null;
//   };

//   const setIntitalReduxState = () => {
//     const data = getLocalStorage();
//     if (data?.token && data?.user) {
//       dispatch(setUser(data.user));
//       dispatch(setToken(data.token));
//     }
//   };

//   const clearLocalStorage = () => {
//     localStorage.removeItem("authData");
//   };

//   const logoutHandler = () => {
//     clearLocalStorage();
//     dispatch(clearAuth());
//     window.location.href = 'http://localhost:3000';
//   };

//   return {
//     loginHandler,
//     setLocalStorage,
//     getLocalStorage,
//     setReduxAuthState,
//     setIntitalReduxState,
//     logoutHandler,
//   };
// };

// export default AuthHandler;

"use client";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import axios from "axios";
import { clearAuth, setToken, setUser } from "../redux/slices/authSlice";
import NavigationHandler from "./NavigationHandler";

const AuthHandler = () => {
  const dispatch = useDispatch();
  const { customNavigation } = NavigationHandler();

  const loginHandler = async (token) => {
    if (!token) {
      toast.error("No token provided.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PUBLIC_API_URL}/auth/token-signin`,
        { token }
      );

      const { data } = response;
      setReduxAuthState(data);
      setLocalStorage(data);
      toast.success("Successfully logged in!");
      customNavigation("/");

    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  const setLocalStorage = ({ user, token }) => {
    if (user && token) {
      const storageData = { user, token };
      localStorage.setItem("authData", JSON.stringify(storageData));
    }
  };

  const getLocalStorage = () => {
    const storageData = localStorage.getItem("authData");
    return storageData ? JSON.parse(storageData) : null;
  };

  const setReduxAuthState = ({ user, token }) => {
    if (user && token) {
      dispatch(setUser(user));
      dispatch(setToken(token));
    }
  };

  const setIntitalReduxState = () => {
    const data = getLocalStorage();
    if (data?.user && data?.token) {
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("authData");
  };

  const logoutHandler = () => {
    clearLocalStorage();
    dispatch(clearAuth());
    window.location.href = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
  };

  return {
    loginHandler,
    setLocalStorage,
    getLocalStorage,
    setReduxAuthState,
    setIntitalReduxState,
    logoutHandler,
  };
};

export default AuthHandler;

