import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CrackTheCodeBar from "./components/CrackTheCodeBar";
import CrackTheCodeFooter from "./components/CrackTheCodeFooter";
import CrackTheCode from "./pages/CrackTheCode";
function App() {
  return (
    <div>
      <CrackTheCodeBar />
      <Routes>
        <Route path="/" element={<CrackTheCode />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <CrackTheCodeFooter />
    </div>
  );
}

export default App;
