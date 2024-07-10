import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./layouts/Main/Main"
import UserDetails from "./components/UserDetails/UserDetails"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import GroceryCost from "./components/GroceryCost/GroceryCost"

function App() {
  const router=createBrowserRouter([
    {
      path:'/',element:<Main></Main>,children:[
        {path:'/',element:<UserDetails></UserDetails>},
        {path:'/User Details',element:<UserDetails></UserDetails>},
        {path:'/Register',element:<Register></Register>},
        {path:'/Login',element:<Login></Login>},
        {path:'/Grocery Cost',element:<GroceryCost></GroceryCost>}
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
