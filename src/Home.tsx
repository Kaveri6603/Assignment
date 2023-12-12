import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ApiDetails from "./Components/ApiDetail";
import Providers from "./Components/Providers";
function Home() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/api-details/:provider" element={<ApiDetails/>} />
          <Route path="/" element={<Providers/>} />
        </Routes>
      </Router>
    </>
  );
}
export default Home;