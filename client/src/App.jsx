import { Routes , Route } from "react-router-dom"
import Layout from "./components/auth/layout"
import Login from "./pages/auth/login"
import Signup from "./pages/auth/signup"

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <h1>header</h1>

      <Routes >
        <Route path="/auth" element={<Layout />}>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

        </Route>
        

      </Routes>

    </div>
  )
}

export default App