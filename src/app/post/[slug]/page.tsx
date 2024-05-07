import styles from './styles.module.scss'
import { Hero } from '@/components/hero';
import { Phone } from 'lucide-react';
import { Container } from '@/components/container';
import Image from 'next/image';
import { PostProps } from '@/utils/actions/post.type';
import { getItemBySlug } from '@/utils/actions/get.data';
import Link from 'next/link';

import img1 from '../../../../public/1auto.jpg'

export default async function Page({ params: { slug } }: {
  params: { slug: string }
}){
  const { objects }: PostProps = await getItemBySlug(slug);
  console.log(JSON.stringify(objects));

  return(
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

<Container>
        <section className={styles.about}>

          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
            Automação residencial
            </h1>
            <p>
            A automação inteligente ajuda a economizar energia, desligando dispositivos quando não estão em uso.
Termostatos inteligentes ajustam a temperatura com base na presença e preferências, economizando na conta de energia.
Segurança Aprimorada:
Câmeras de segurança, fechaduras digitais e alarmes podem ser monitorados remotamente.
Notificações em tempo real permitem que você saiba o que está acontecendo em casa, mesmo quando está longe.
            </p>

         <Link href="http://api.whatsapp.com/send?1=pt_BR&phone=5571987202769" target='_blank'
         className={styles.link}
         >
         Converse comigo
         </Link>
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt="titulo foto"
              quality={100}
              fill={true}
              src={img1}
            />

            
          </div>
        </section>

        <div>
        
     
        <Link  href="https://www.youtube.com/watch?v=hbXLUK6CgSo&t=2s" target="_blank">
        <Image src={img1} width="460" height="315" alt="Miniatura do vídeo"/>
    </Link>
    </div>

   
   

      </Container>

       
    </>
  )
}