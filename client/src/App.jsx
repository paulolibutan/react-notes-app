import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import AppNavbar from "./components/AppNavbar";

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
