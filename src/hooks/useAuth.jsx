import { useSelector } from "react-redux";

const useAuth = () => {
  const getAuth = useSelector((state) => state.auth.firebase.getAuth);
  return getAuth();
};

export default useAuth;
