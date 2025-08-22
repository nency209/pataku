

import Blog from "@/components/blog/Blog";
import { NavigationIndex,Header,Footer } from "@/layout";


export default function RegisterHome()
{
  return(
    <main className="min-h-screen">
      <Header/>
  <NavigationIndex/>
<Blog/>
  <Footer/>
    </main>
  )
}