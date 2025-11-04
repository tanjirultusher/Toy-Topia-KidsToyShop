import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './Layout/Root.jsx';
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Home from "./components/Home/Home.jsx";
import AuthProvider from "./Context/AuthContext/AuthProvider.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import ToyDetails from "./Pages/AllToys/ToyDetails/ToyDetails.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'cart',
        element: <PrivateRoute>
          <Cart></Cart>
        </PrivateRoute>
      },
      {
        path: 'profile',
        Component: Profile
      },
      {
        path: '/toys/:toyId',
        element: <PrivateRoute>
          <ToyDetails/>
        </PrivateRoute> 
      },
      {
        path: "*",
        element: <ErrorPage/>
      },
      {
        path: 'forget-password',
        Component: ForgetPassword
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
