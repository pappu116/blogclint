
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";

import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Single from "./Pages/Single";
import Write from "./Pages/Write";

const Layout = () =>{
  return(
  <>
    <NavBar/>
    <Outlet/>
    <Footer/>
  </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
     {
      path: "/",
      element: <Home/>
     },
     {
      path: "/post/:id",
      element: <Single/>
     },
     {
      path: "/Write",
      element: <Write/>
     }
    ]
  },

  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  
]);

function App() {

  return (
    <div className="app">
     <div className="container">
     <RouterProvider router={router} />
     </div>
    </div>
  );
}



export default App;
