import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Signup/>
//         <h1>HELLO</h1>
//       </div>
//     );
//   }
// }

export default App;
