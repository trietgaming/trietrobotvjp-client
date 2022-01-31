import { useSelector } from "react-redux";
import { useMemo, useRef } from "preact/hooks";
import { User } from "@firebase/auth";
import { RootStateType } from "@appStore";

const useUser = (...userProps: (keyof User)[]): User => {
  const { currentUser } = useSelector((state: RootStateType) => state.auth);
  const dependencies = useRef(
    userProps?.length > 0
      ? userProps.map((key) => (currentUser as unknown as User)[key])
      : undefined
  ).current;
  return useMemo(() => currentUser, dependencies) as User;
};
export default useUser;
