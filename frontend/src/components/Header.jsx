import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCiCCH9eI9r-GrxR_n8IYmJ50nBatwr6t0",
  authDomain: "salary-management-website.firebaseapp.com",
  databaseURL: "https://salary-management-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "salary-management-website",
  storageBucket: "salary-management-website.firebasestorage.app",
  messagingSenderId: "327393609710",
  appId: "1:327393609710:web:d3b322bb5b5caba53270ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Header = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <header className="bg-gray-900 text-white py-4 shadow w-full">
      <div className="max-w-full mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Hamburger Icon (for smaller screens) */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/recipes" className="hover:text-blue-500 transition">
            Recipes
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
        </nav>

        {/* Authentication */}
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu (Dropdown for smaller screens) */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 space-y-2 px-4 py-2">
          <Link to="/" className="block hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/about" className="block hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/recipes" className="block hover:text-blue-500 transition">
            Recipes
          </Link>
          <Link to="/contact" className="block hover:text-blue-500 transition">
            Contact
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="w-full text-left bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
