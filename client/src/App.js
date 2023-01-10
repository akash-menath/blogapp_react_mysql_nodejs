import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './style.scss'


const Layout = () => {
  return (<> <Navbar />  <Outlet />  <Footer />  </>)
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/post/:id', element: <Single /> },
      { path: '/write', element: <Write /> },

    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);


function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App;
