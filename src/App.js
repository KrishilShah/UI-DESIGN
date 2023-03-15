import "./App.css";
import { Routes, Route } from "react-router-dom";
import Otp from "./pages/Otp";
import Login from "./pages/Login";
import Succ from "./pages/Succ";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/succ" element={<Succ />} />
      </Routes>
    </>
  );
}

export default App;
