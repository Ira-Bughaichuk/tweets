import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Carts from "./component/Carts/Carts/Carts";
import Home from "./page/Home/Home";
import Header from "./component/Carts/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Carts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
