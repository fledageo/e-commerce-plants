import { createBrowserRouter, RouterProvider } from "react-router"
import { Home } from "./pages/Home/Home"
import { Header } from "./components/complex/Header/Header"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  }
])

const App = () => {
  return (
    <>
      <Header/>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App