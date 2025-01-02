import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Failed to send the message.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  

  return (
    
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info Section */}
        <div className="space-y-4 mt-36">
          <img src="https://media.istockphoto.com/id/1452771551/vector/contact-us-button-with-cursor-pointer-click-vector-web-button.jpg?s=612x612&w=0&k=20&c=IGWQ-VhsNAnZyKnuWhggHhpozUiuFRq5jd-rJ7-KqIc=" alt="" />
        </div>

        {/* Form Section */}
        <div className="bg-whiteshadow-xl rounded-lg p-6 mt-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                placeholder="Write your message"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn bg-violet-400 text-white font-bold w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ContactUs;
