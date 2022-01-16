import { useSelector } from "react-redux";

const useAuth = () => {
  return useSelector((state) => state.auth.firebase.getAuth)();
};

export default useAuth;
