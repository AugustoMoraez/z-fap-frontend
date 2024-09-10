import { Route,Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { redirectToAuth } from "./pages"
import { Login } from "./pages/auth/login"
import { Register } from "./pages/auth/register"


const App = () => {

  return (
    <div>
      <Routes>
        <Route Component={redirectToAuth} path="/" />
        <Route Component={Login} path="/auth/login" />
        <Route Component={Register} path="/auth/register" />
        <Route Component={Home} path="/home" />
      </Routes>
    </div>
  )
}

export default App
