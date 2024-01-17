import AdminLogin from "./pages/AdminLogin";
import DashboardHome from "./pages/DashboardHome";
import WelcomeAdmin from "./components/WelcomeAdmin";
import { AppProvider } from "./context/Appcontext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin />
  },
  {
    path: "/dashboard",
    element: <DashboardHome />,
    children: [
      {
        index: true,
        element: <WelcomeAdmin />
      }
    ]
  },
]);


function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
