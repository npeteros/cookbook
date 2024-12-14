import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

// Your provided Firebase configuration
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

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login using Firebase Authentication
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful");
        navigate("/");  // Redirect to the Home page
      } else {
        // Sign up a new user
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful");
        navigate("/");  // Redirect to the Home page
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  const handleForgetPassword = async () => {
    try {
      if (email) {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent. Check your inbox.");
      } else {
        alert("Please enter your email address.");
      }
    } catch (error) {
      console.error("Password reset error:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              placeholder="Full Name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border-gray-300"
            />
          )}

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-gray-300"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-gray-300"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 py-2 rounded-lg text-white font-bold"
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          <button
            type="button"
            onClick={handleForgetPassword}
            className="w-full mt-2 bg-red-500 py-2 rounded-lg text-white font-bold"
          >
            Forget Password?
          </button>
        </form>

        <p className="mt-4 text-center text-gray-500">
          {isLogin ? "No account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 font-bold ml-2"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
