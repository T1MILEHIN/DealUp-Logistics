import { Suspense, lazy } from "react";
import AdminLogin from "./pages/AdminLogin";
import DashboardHome from "./pages/DashboardHome";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import AddProduct from "./pages/AddProduct";
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
      },
      {
        path: "orders",
        element: <OrderPage />
      },
      {
        path: "products",
        element: <ProductPage />
      },
      {
        path: "addproduct",
        element: <AddProduct />
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
