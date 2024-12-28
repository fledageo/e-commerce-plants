import { createBrowserRouter, RouterProvider } from "react-router"
import { Home } from "./pages/Home/Home"
import { Details } from "./pages/Details/Details"
import { Layout } from "./components/complex/Layout/Layout"
import { Favorites } from "./pages/Favorites/Favorites"
import { Basket } from "./pages/Basket/Basket"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/details/:productId",
        element: <Details />
      },
      {
        path:"/favorites",
        element:<Favorites/>
      },
      {
        path:"/basket",
        element:<Basket/>
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App