import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ childern }) {
  const [count, setCount] = useState(0);

  const addNotification = () => {
    setCount((prev) => prev + 1);
  };

  const resetNotification = () => {
    setCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{ count, addNotification, resetNotification }}
    >
      {childern}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}
