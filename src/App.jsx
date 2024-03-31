import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Success from "./pages/SuccessPage";
import Error from "./pages/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
