import { Route,   BrowserRouter as Router,
  Routes } from "react-router-dom";
import ApiDetails from "./Components/ApiDetail";
import Providers from "./Components/Providers";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Providers/>} />
          <Route path="/api-details/:provider" element={<ApiDetails/>} />
        </Routes>
      </Router>
  );
}

export default App;