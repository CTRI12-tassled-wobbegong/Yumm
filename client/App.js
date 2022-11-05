import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.scss';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import User from './pages/User.js';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Login/> },
    { path: '/signup', element: <Signup/> },
    { path: '/user', element: <User/> }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
