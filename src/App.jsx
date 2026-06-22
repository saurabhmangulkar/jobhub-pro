import { Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import ResumeUpload from "./pages/ResumeUpload";
import MyApplications from "./pages/MyApplications";
import Dashboard from "./pages/Dashboard";
import MyResume from "./pages/MyResume";
import ProtectedRoute from "./components/ProtectedRoute";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import RecruiterRoute from "./components/RecruiterRoute";
import CreateJob from "./pages/CreateJob";
import ManageJobs from "./pages/ManageJobs";
import ViewApplicants from "./pages/ViewApplicants";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route
          path="/my-applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload-resume"
          element={
            <ProtectedRoute>
              <ResumeUpload />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-resume"
          element={
            <ProtectedRoute>
              <MyResume />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter-dashboard"
          element={
            <RecruiterRoute>
              <RecruiterDashboard />
            </RecruiterRoute>
          }
        />
        <Route
          path="/create-job"
          element={
            <RecruiterRoute>
              <CreateJob />
            </RecruiterRoute>
          }
        />
        <Route
  path="/manage-jobs"
  element={
    <RecruiterRoute>
      <ManageJobs />
    </RecruiterRoute>
  }
/>
<Route
  path="/view-applicants"
  element={
    <RecruiterRoute>
      <ViewApplicants />
    </RecruiterRoute>
  }
/>
      </Routes>
    </>
  );
}

export default App;
