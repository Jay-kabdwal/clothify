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
import CheckAuth from "./components/common comp/CheckAuth"
import UnAuth from "./pages/unauth/UnAuth"

const App = () => {

  const isAutherised = true // Replace with actual authentication logic
  const user = {role : "user"}// Replace with actual user data

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes >
        <Route path="/auth" element={<CheckAuth isAutherised={isAutherised} user={user}><Layout /></CheckAuth>}>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

        </Route>
        <Route path="/admin" element={<CheckAuth isAutherised={isAutherised} user={user}><AdminLayout /></CheckAuth>}>

          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="featurs" element={<AdminFeatures />} />

        </Route>

        <Route path="/shop" element={<CheckAuth isAutherised={isAutherised} user={user}><ShoppingLayout /></CheckAuth>} >
        <Route path="home" element={<Home/>}/>
        <Route path="listing" element={<ListingPages/>}/>
        <Route path="account" element={<Account/>}/>
        <Route path="checkout" element={<CheckOut/>}/>

        </Route>

        <Route path="*" element={<NotFound />} />
        
        <Route path="/unauthpage" element={<CheckAuth isAutherised={isAutherised} user={user}><UnAuth /></CheckAuth>} />




      </Routes>

    </div>
  )
}

export default App