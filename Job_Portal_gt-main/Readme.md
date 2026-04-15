# MERN Job Portal

## Overview
A fully functional **Job Portal** built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to register, search for jobs, apply for positions, and manage job listings. Employers can post jobs and manage applications, while job seekers can explore job opportunities and apply easily.

## Features
- **User Authentication** (Login/Register with JWT Authentication)
- **Role-Based Access** (Job Seekers & Employers)
- **Job Listings** (Create, Read, Update, Delete)
- **Apply for Jobs** (Job seekers can submit applications)
- **User Dashboard** (Separate dashboards for seekers & employers)
- **Profile Management** (Update user profiles & resumes)
- **Search & Filter** (Search jobs by keywords, location, etc.)
- **Responsive UI** (Built using React & Tailwind CSS)
- **Secure API** (Node.js & Express.js backend with JWT auth)

## Tech Stack
### Frontend:
- React.js
- Redux (for state management)
- Tailwind CSS
- React Router DOM
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT Authentication
- Multer (for file uploads)

### Deployment:
- Frontend: Vercel / Netlify
- Backend: Render / Heroku
- Database: MongoDB Atlas

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB (local or cloud - MongoDB Atlas)

### Clone the repository
```sh
git clone https://github.com/your-username/job-portal.git
cd job-portal
```

### Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
Start the backend server:
```sh
npm run dev
```

### Frontend Setup
```sh
cd frontend
npm install
```
Create a `.env` file in the `frontend` directory and add:
```env
REACT_APP_API_URL=http://localhost:5000
```
Start the frontend server:
```sh
npm start
```

## API Endpoints
### Auth Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user & get JWT token

### Job Routes
- `GET /api/jobs` - Get all job listings
- `POST /api/jobs` - Create a new job listing (Employer only)
- `GET /api/jobs/:id` - Get job details
- `PUT /api/jobs/:id` - Update job listing (Employer only)
- `DELETE /api/jobs/:id` - Delete job listing (Employer only)

### Application Routes
- `POST /api/applications` - Apply for a job (Job Seeker only)
- `GET /api/applications/:userId` - Get applications of a user

## Deployment Guide
### Deploy Backend
1. Push code to GitHub
2. Deploy on Render / Heroku
3. Set environment variables (`MONGO_URI`, `JWT_SECRET`)

### Deploy Frontend
1. Build the project:
```sh
npm run build
```
2. Deploy on Vercel / Netlify
3. Set API URL environment variable

## Contributing
- Fork the repo
- Create a new branch (`feature-branch`)
- Commit your changes
- Open a pull request

## License
This project is licensed under the MIT License.

## Contact
For queries, reach out at: **ergovindthakur@gmail.com**

---
Let's create something cool! 🚀

