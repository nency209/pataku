
import Contact from "@/components/sections/contact";
import { NavigationIndex,Header,Footer } from "@/layout";


export default function RegisterHome()
{
  return(
    <main className="min-h-screen">
      <Header/>
  <NavigationIndex/>
<Contact/>
  <Footer/>
    </main>
  )
}