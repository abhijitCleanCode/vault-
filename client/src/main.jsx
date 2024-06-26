import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux';
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { SignUp, Login, Home, AllPosts, Connect, Features } from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/features",
        element: <Features />
      },
      {
        path: "/connect",
        element: <Connect />
      },
      {
        path: "/all-posts",
        element: <AllPosts />
      },
      {
        path: "/api/v1/users/signup",
        element: (
            <SignUp />
        )
      },
      {
        path: "/api/v1/users/login",
        element: (
            <Login />
        )
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
