import { Route,Routes } from "react-router-dom"
import { redirectToAuth } from "./pages/home"
import { Login } from "./pages/auth/login"
import { Register } from "./pages/auth/register"
import {Container} from "./AppStyle"


const App = () => {

  return (
    <Container>
      <Routes>
        <Route Component={redirectToAuth} path="/" />
        <Route Component={Login} path="/auth/login" />
        <Route Component={Register} path="/auth/register" />
      </Routes>
    </Container>
  )
}

export default App
