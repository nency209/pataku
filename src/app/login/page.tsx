import { NavigationIndex,Header,Footer } from "@/layout";
import Login from "@/components/sections/Login";

export default function LoginHome()
{
  return(
    <main className="min-h-screen">
      <Header/>
  <NavigationIndex/>
  <Login/>
  <Footer/>
    </main>
  )
}