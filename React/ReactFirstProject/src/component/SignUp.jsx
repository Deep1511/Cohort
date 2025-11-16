import { use, useState } from "react";
import apiClient from "../../service/apiClient";
import { useNavigate } from "react-router";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //for navigation
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    //make an api call to backend with data
    // get response from backend
    // take action based on response
    try {
      console.log("Trying to do a signup");
      const data = await apiClient.signup(name, email, password);
      console.log("Signup response", data);
      if (data.success) {
        navigate("/login");
      } else {
        setError(data.message || "signup failed");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="signup">
      <h1>Welcome to signup page</h1>
      {error && <div>Error: ${error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-grp">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-grp">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-grp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "signup..." : "Signup"}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
