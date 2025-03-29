import { Routes, Route } from "react-router-dom"
import Layout from "./components/auth/layout"
import Login from "./pages/auth/login"
import Signup from "./pages/auth/signup"
import AdminLayout from "./components/admin/admin-layout"
import AdminDashboard from "./pages/admin-view/dashboar"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/orders"
import AdminFeatures from "./pages/admin-view/features"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFound from "./pages/notfound/NotFound"
import ListingPages from "./pages/shopping-view/ListingPages"
import Account from "./pages/shopping-view/Account"
import CheckOut from "./pages/shopping-view/CheckOut"
import Home from "./pages/shopping-view/Home"

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes >
        <Route path="/auth" element={<Layout />}>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

        </Route>
        <Route path="/admin" element={<AdminLayout />}>

          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="featurs" element={<AdminFeatures />} />

        </Route>

        <Route path="/shop" element={<ShoppingLayout />} >
        <Route path="home" element={<Home/>}/>
        <Route path="listing" element={<ListingPages/>}/>
        <Route path="account" element={<Account/>}/>
        <Route path="checkout" element={<CheckOut/>}/>

        </Route>

        <Route path="*" element={<NotFound />} />




      </Routes>

    </div>
  )
}

export default App