import { useEffect } from "react";

const useEnter = (id, deps = []) => {
  return useEffect(() => {
    const handleEnter = (e) => {
      if (e.key !== "Enter") return;
      document.getElementById(id).click();
    };
    window.addEventListener("keypress", handleEnter);
    return () => window.removeEventListener("keypress", handleEnter);
  }, deps);
};

export default useEnter;
