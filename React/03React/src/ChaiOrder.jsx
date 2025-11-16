import { useState } from "react";

export function ChaiCounter() {
  const [chai, setChai] = useState(0);

  const handleSubmit = () => {
    setChai((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Chai Counter</h2>
      <p>You have served {chai} cups of chai</p>
      <button onClick={handleSubmit}>Served Chai</button>
    </div>
  );
}
