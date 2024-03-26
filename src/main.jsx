import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import ListedBooks from './Components/ListedBooks';
import Read from './Components/Read';
import About from './Components/About';
import Community from './Components/Community';
import Mainlayout from './Layouts/Mainlayout';
import BookDetails from './Pages/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/read",
        element: <Read></Read>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/community",
        element: <Community></Community>
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails></BookDetails>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
