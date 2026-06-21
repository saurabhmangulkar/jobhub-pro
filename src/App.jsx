import { Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/jobs/:id"
          element={<JobDetails />}
        />
      </Routes>

    </>
  );
}

export default App;