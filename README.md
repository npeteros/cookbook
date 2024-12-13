# 📚 **Cook Book** - React.js & Express.js Web Application

A full-stack web application where you can explore and share recipes. Built with **React.js** for the frontend and **Express.js** for the backend.

---

## 🚀 **Table of Contents**

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Frontend](#frontend)
- [Backend](#backend)
- [Environment Variables](#environment-variables)
- [Run Tests](#run-tests)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 **Project Overview**

The **Cook Book** project is a full-stack web application where users can explore, share, and save their favorite recipes. It includes a seamless integration between a **React.js** frontend and an **Express.js** backend.

---

## 🛠️ **Tech Stack**

- **Frontend:** React.js  
- **Backend:** Express.js  
- **Database:** MongoDB (or any database you prefer)  
- **Deployment:** Heroku / Vercel  
- **Tools:** Node.js, npm/yarn  

---

## 🧑‍💻 **Setup Instructions**

### 1. **Clone the Repository**

Clone the Cook Book repository to your local machine:

```bash
git clone https://github.com/ethan123montera123/cookbook.git

2. Install Dependencies
Navigate to the project directory and install dependencies for both frontend and backend.

For Backend:

bash
Copy code
cd backend
npm install
For Frontend:

bash
Copy code
cd ../frontend
npm install
3. Configure Environment Variables
Create a .env file in your backend root and add the following:

bash
Copy code
# Backend Environment Variables
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
For the frontend, you may have a .env file with:

bash
Copy code
REACT_APP_API_URL=http://localhost:5000
4. Run the Application
Start the backend server:

bash
Copy code
# In backend folder
npm start
Start the React frontend:

bash
Copy code
# In frontend folder
npm start
Your app should be running at:

Frontend: http://localhost:3000
Backend: http://localhost:5000
