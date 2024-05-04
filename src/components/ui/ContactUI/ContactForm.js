"use client";
import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to your API endpoint

      const response = await axios.post("/api/contact", formData);
      console.log("Response:", response.data);
      if (response.data?.status) {
        alert(response.data?.message);
      }

      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="input input-bordered w-full"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          className="input input-bordered w-full"
          type="number"
          id="phone"
          name="phone"
          placeholder="Enter your number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="input input-bordered w-full"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          className="textarea textarea-bordered textarea-md w-full"
          id="message"
          name="message"
          placeholder="Message here"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="submit"
        value="Send"
        className="bg-[#2b165c] text-white py-3 px-20 rounded-full cursor-pointer"
      />
    </form>
  );
};

export default ContactForm;
