import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./layouts/Main/Main"
import UserDetails from "./components/UserDetails/UserDetails"

function App() {
  const router=createBrowserRouter([
    {
      path:'/',element:<Main></Main>,children:[
        {path:'/',element:<UserDetails></UserDetails>},
        {path:'/User Details',element:<UserDetails></UserDetails>}
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
