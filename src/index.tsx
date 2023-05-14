import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./App"
import reportWebVitals from "./reportWebVitals"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Conditions from "./screens/Conditions"
import Footer from "./components/Footer"
import NavigationBar from "./components/Navbar"
import Loops from "./screens/Loops"
import Arrays from "./screens/Arrays"
import Classes from "./screens/Classes"
import FileOperations from "./screens/Files"
import Functions from "./screens/Functions"
import VariablesAndTypes from "./screens/Variables"

export const RoutesNames = {
  Home: "/",
  Conditions: "/conditions",
  Loops: "/loops",
  Arrays: "/arrays",
  Files: "/files",
  Classes: "/classes",
  Variables: "/variables",
  Functions: "/functions",
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/conditions",
    element: <Conditions />,
  },
  {
    path: "/loops",
    element: <Loops />,
  },
  {
    path: "/arrays",
    element: <Arrays />,
  },
  {
    path: "/files",
    element: <FileOperations />,
  },
  {
    path: "/classes",
    element: <Classes />,
  },
  {
    path: "/functions",
    element: <Functions />,
  },
  {
    path: "/variables",
    element: <VariablesAndTypes />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <NavigationBar />
    <main style={{ padding: 15, paddingBottom: 80 }}>
      <RouterProvider router={router} />
    </main>

    <Footer />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
