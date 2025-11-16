import { useState } from "react";
import { useConatctForm } from "./hooks/useConatctForm";
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { loading, submitContact, successMessage, errorMessage } =
    useConatctForm();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>Contact Form</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          id="name"
          onChange={handleChange}
          placeholder="Your name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          id="email"
          onChange={handleChange}
          placeholder="Your email"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending.." : "Send"}
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default ContactForm;
