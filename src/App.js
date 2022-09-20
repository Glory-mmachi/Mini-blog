import Navbar from "./component/navbar";
import Home from "./component/home/home";
import { Route, Routes } from "react-router-dom";
import Create from "./component/create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
      </Route>
    </Routes>
  );
}

export default App;
