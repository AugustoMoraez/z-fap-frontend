import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Login } from "../pages/auth/login"
import { Register } from "../pages/auth/register"
import { Container,Main } from "../AppStyle"
import { Header } from "../components/header"
import { useAppSelector } from "../hooks/useAppSelector"
import { NotFound } from "../pages/notFound"


export const MainRouter = () => {
    
  const user = useAppSelector(state => state.user.CurrentUser)

  if (!user) {
    return (
      <Container>
         
          <Routes>
            <Route Component={Home} path="/" />
            <Route Component={Login} path="/auth/login" />
            <Route Component={Register} path="/auth/register" />
            <Route Component={NotFound} path="*" />
          </Routes>
        
      </Container>
    )
  }

  return (
    <Container>
      <Header />
        <Main>
          <Routes>
            <Route Component={Home} path="/" />
            <Route Component={NotFound} path="*" />
          </Routes>
        </Main>
      
    </Container>
  )
}
