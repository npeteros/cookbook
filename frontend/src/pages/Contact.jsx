import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    const SERVICE_ID = "service_9i6b9do";
    const TEMPLATE_ID = "template_ygywmxh";
    const PUBLIC_KEY = "jUQDE_dlABvpcAawZ";

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
    } catch (error) {
      console.error("Failed to send message", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 rounded-lg font-bold text-white ${
            loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
          } transition-colors flex items-center justify-center`}
        >
          {loading && <span className="loader mr-2"></span>}
          {loading ? "Sending..." : success ? "✅ Sent" : "Send Message"}
        </button>

        <style jsx>{`
          .loader {
            border: 2px solid transparent;
            border-top-color: #fff;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1.5s linear infinite;
          }
          
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </form>
    </section>
  );
};

export default ContactForm;
