import About from "@/components/sections/about";

import { NavigationIndex,Header,Footer } from "@/layout";


export default function LoginHome()
{
  return(
    <main className="min-h-screen">
      <Header/>
  <NavigationIndex/>
<About/>
  <Footer/>
    </main>
  )
}