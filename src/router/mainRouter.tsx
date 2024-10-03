import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Login } from "../pages/auth/login"
import { Register } from "../pages/auth/register"
import { Container,Main } from "../AppStyle"
import { Header } from "../components/header"
import { useAppSelector } from "../hooks/useAppSelector"
import { NotFound } from "../pages/notFound"
import { RequiredAuth } from "./requiredAuth"


export const MainRouter = () => {
    
  const user = useAppSelector(state => state.user.CurrentUser)

  if (!user) {
    return (
      <Container>
         
          <Routes>
            <Route element={<RequiredAuth><Home/></RequiredAuth>} path="/" />
            <Route element={<Login/>} path="/auth/login" />
            <Route element={<Register/>} path="/auth/register" />
            <Route element={<NotFound/>} path="*" />
          </Routes>
        
      </Container>
    )
  }

  return (
    <Container>
      <Header />
        <Main>
          <Routes>
          <Route element={<RequiredAuth><Home/></RequiredAuth>} path="/" />
            <Route element={<RequiredAuth><NotFound/></RequiredAuth>} path="*" />
          </Routes>
        </Main>
      
    </Container>
  )
}
