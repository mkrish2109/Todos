import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Todos from "./pages/Todos";
import Home from "./pages/Home";
// import DeshBord from "./pages/DeshBord";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthGuard from "./guard/AuthGuard";
import AuthProvider from "./provider/AuthProvider";
import AdminLayout from "./layout/AdminLayout";
import DeshBord from "./pages/DeshBord";
import Profile from "./pages/Profile";
// import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="admin" element={<AdminLayout />}>
                <Route
                  path="deshbord"
                  element={
                    <AuthGuard>
                      <DeshBord />
                    </AuthGuard>
                  }
                />
                <Route
                  path="todos"
                  element={
                    <AuthGuard>
                      <Todos />
                    </AuthGuard>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <AuthGuard>
                      <Profile />
                    </AuthGuard>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
