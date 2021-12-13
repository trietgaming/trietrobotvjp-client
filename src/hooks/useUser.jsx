import { useSelector } from "react-redux";

const useUser = () => {
  console.log("USE USER");
  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
  return currentUser;
};

export default useUser;
