import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Body from './Component/Body/Body';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Shop from './Component/Shop/Shop';


const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element: <Body></Body>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: 'contact',
          element: <Contact></Contact>

        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/shop',
          element: <Shop></Shop>,
        }
       
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;