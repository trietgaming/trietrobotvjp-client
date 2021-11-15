import { useSelector } from "react-redux";

const useUser = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return currentUser;
};

export default useUser;
