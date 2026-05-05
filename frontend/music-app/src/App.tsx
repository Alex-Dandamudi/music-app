import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage"
import { AuthenticateWithRedirectCallback } from "@clerk/react"
import MainLayout from "./layout/MainLayout"

function App() {

  return (
    <>
     <Routes>
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback 
        signInForceRedirectUrl={"/auth-callback"}
        signUpForceRedirectUrl={"/auth-callback"}
        />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        </Route>

      </Routes>     
    </>
  ); 
} 

export default App
