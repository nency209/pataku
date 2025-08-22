import ShippingPolicy from "@/components/sections/shipping_policy";
import SizeChart from "@/components/sections/SizeChart";
import { NavigationIndex,Header,Footer } from "@/layout";


export default function LoginHome()
{
  return(
    <main className="min-h-screen">
      <Header/>
  <NavigationIndex/>
 <ShippingPolicy/>
  <Footer/>
    </main>
  )
}