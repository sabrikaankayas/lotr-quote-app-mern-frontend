import './App.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quiz from './components/Quiz';
import Scoreboard from "./components/Scoreboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Quiz></Quiz>
  },
  {
    path: "/scoreboard",
    element: <Scoreboard></Scoreboard>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer />
    </>
  );
}

export default App;

