import { useEffect } from "react";

const useEnter = (id: string, deps = []) => {
  return useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      document.getElementById(id)?.click();
    };
    window.addEventListener("keypress", handleEnter);
    return () => window.removeEventListener("keypress", handleEnter);
  }, deps);
};

export default useEnter;
