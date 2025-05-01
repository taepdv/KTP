import ReactDOM from "react-dom/client"
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Tour from "./pages/Tour.jsx"
import Activities from "./pages/Activities.jsx"
import Nature from "./pages/Nature.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/tour",
    element: <Tour />
  },
  {
    path: "/activities",
    element: <Activities />
  },
  {
    path: "/nature",
    element: <Nature />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={router} />);
