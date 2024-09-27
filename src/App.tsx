import { Route,Routes } from "react-router-dom"
import { Setup } from "./pages/setup"
import { redirectToAuth } from "./pages/home"
import { Login } from "./pages/auth/login"
import { Register } from "./pages/auth/register"
import { PainelADM } from "./pages/painel-adm"


const App = () => {

  return (
    <div>
      <Routes>
        <Route Component={redirectToAuth} path="/" />
        <Route Component={Login} path="/auth/login" />
        <Route Component={Register} path="/auth/register" />
        <Route Component={PainelADM} path="/painel-adm" />
      </Routes>
    </div>
  )
}

export default App
