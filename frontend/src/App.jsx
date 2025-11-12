import { Routes, Route } from "react-router-dom"; 
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import Layout from "./Layout";

function App() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>


      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>

  );
}

export default App;