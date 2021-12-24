import { useCallback } from "react";
import useUser from "./useUser";
import { updateProfile } from "@firebase/auth";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "@firebase/storage";
import useUpdateUser from "./useUpdateUser";

const useUpdateUserData = () => {
  const currentUser = useUser();
  const updateUser = useUpdateUser();

  return useCallback(async ({ username: displayName, selectedFile }) => {
    if (!currentUser) throw new Error("User is not logged in");
    try {
      if (displayName && displayName !== currentUser.displayName) {
        await updateProfile(currentUser, { displayName });
      }
      if (selectedFile) {
        const storage = getStorage();
        const storageRef = ref(
          storage,
          `/users/${currentUser.uid}/photoImage.jpg`
        );
        await uploadString(
          storageRef,
          selectedFile !== "default"
            ? selectedFile.replace(/^data:image\/\w+;base64,/, "")
            : "",
          "base64"
        );
        const photoURL =
          selectedFile !== "default" ? await getDownloadURL(storageRef) : "";
        await updateProfile(currentUser, { photoURL });
      }
    } catch (err) {
      throw err;
    } finally {
      updateUser();
    }
  }, []);
};

export default useUpdateUserData;
