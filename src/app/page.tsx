import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Footer } from "@/home/footer";
import { Services } from "@/home/services";
import { Submenu } from "@/home/submenu";
import { getDataHome, getsubMenu } from "@/utils/actions/get.data";
import { MenuProps } from "@/utils/actions/menu.type";
import { HomeProps } from "@/utils/home.type";
import { Phone } from "lucide-react";


export default async function Home() {
  const {object}:HomeProps = await getDataHome();
  const menu: MenuProps = await getsubMenu();
 // console.log(JSON.stringify(object));


  
  return (
    <main>
  {menu.objects.length > 0 && <Submenu menu={menu}/>}

     <Hero heading={object.metadata.heading}
     buttonTitle={object.metadata.cta_button.title}
     buttonUrl={object.metadata.cta_button.url}
     bannerUrl={object.metadata.banner.url}
     icon={<Phone size={24} color="#FFF" />}
     />

<Container>

     <Services object={object}/>
     <Footer object={object}/>
  
</Container>
    </main>
  );
}

