import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Reset from "./Reset";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} exact />
          </Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/reset" element={<Reset />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
