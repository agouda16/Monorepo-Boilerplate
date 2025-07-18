import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/pages/login/index";
import { Home } from "@/pages/home/index";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
