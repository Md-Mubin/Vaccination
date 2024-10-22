// ================= All Documentation
import                './App.css'
import Home      from './Pages/Home'
import LayoutOne from './Layouts/LayoutOne'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() {

  const vaccination = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayoutOne />}>
        <Route index element={<Home />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={vaccination} />
    </>
  )
}

export default App
