import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Todos from "./pages/Todos";
import Home from "./pages/Home";
import DeshBord from "./pages/DeshBord";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="admin/deshbord" element={<DeshBord />} />
            <Route path="admin/todos" element={<Todos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;