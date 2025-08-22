import Register from "@/components/sections/Register";
import { NavigationIndex,Header,Footer } from "@/layout";


export default function RegisterHome()
{
  return(
    <main className="min-h-screen">
      <Header/>
  <NavigationIndex/>
  <Register/>
  <Footer/>
    </main>
  )
}