import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  return isOnline;
};

export default useOnlineStatus;
