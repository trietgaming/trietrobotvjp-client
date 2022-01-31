import isLightMode from "@assets/styles/themeSlice";
import auth from "@appFirebase/auth";
import userAccount from "src/backend/userAccountSlice";

const rootReducer = {
  isLightMode,
  auth,
  userAccount,
};

export default rootReducer;
