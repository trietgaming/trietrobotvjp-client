import { useCallback } from "react";
import { sendEmailVerification } from "firebase/auth";
import useUser from "./useUser";

export default () => {
  const currentUser = useUser();

  return useCallback(async () => {
    try {
      await sendEmailVerification(currentUser);
    } catch (error) {
      throw error;
    }
  }, []);
};
