import { Route, Routes } from "react-router-dom";
import CreateReport from "./pages/createReport/CreateReport";
import Home from "./pages/home/Home";
import LoginPage from "./pages/auth/login/pages/LoginPage";
import RegisterPage from "./pages/auth/register/pages/RegisterPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/crear-reporte" element={<CreateReport />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
export default App;
