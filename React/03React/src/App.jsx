import { useState, useEffect } from "react";
import { ChaiMenu } from "./AllChai";
import { ChaiCounter } from "./ChaiOrder";
import { useSpecialHooks } from "./hooks/useSpecialHooks";
export function App() {
  const { chai, loading, error } = useSpecialHooks();
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    fetch(`http://localhost:3000/api`)
      .then((res) => {
        res.json();
      })
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to load"));
  }, []);

  if (loading) {
    return <h2>loading</h2>;
  }
  if (error) {
    return <h2>Error : {error}</h2>;
  }
  return (
    <div>
      <h1>Welcome to chai code</h1>
      <p>Serving hot chai with react</p>
      <h2>{message}</h2>
      <ChaiCounter />
      <ChaiMenu />
      <h3>{chai.name}</h3>
    </div>
  );
}
