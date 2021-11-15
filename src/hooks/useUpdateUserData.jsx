import { useCallback } from "react";
import useUser from "./useUser";
import { updateProfile } from "@firebase/auth";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "@firebase/storage";

const useUpdateUserData = () => {
  const currentUser = useUser();

  return useCallback(async ({ username: displayName, selectedFile }) => {
    if (displayName && displayName !== currentUser.displayName) {
      try {
        await updateProfile(currentUser, { displayName })
      } catch (error) {
        throw error;
      }
    }
    if (selectedFile) {
      const storage = getStorage();
      const storageRef = ref(
        storage,
        `/users/${currentUser.uid}/photoImage.jpg`
      );
      try {
        await uploadString(
          storageRef,
          selectedFile.replace(/^data:image\/\w+;base64,/, ""),
          "base64"
        );
        const photoURL = await getDownloadURL(storageRef);
        await updateProfile(currentUser, { photoURL });
      } catch (err) {
        throw err;
      }
    }
  }, []);
};

export default useUpdateUserData;
