import Head from 'next/head'
import Footer from '../components/footer';
import Nav from '../components/nav';
import Discord from '../components/discord'
import {css} from '@emotion/react'


const index=()=>{
  
  const home = css`
  position: relative;
  font-size: 1em;
  padding: 0 150px;
  transition: 0.5s ease;
  transition-property: padding;
  min-height: 100vh;
  background: linear-gradient(rgba(195, 0, 255, 0.021) 0%, rgb(40, 4, 41) 90%), url(https://iridescentsoulofanangel.files.wordpress.com/2015/06/cherry-blossoms-trees-dark-dress-night-stars-pink-blue-eyes-long-hair-pantyhose-glowing-white-hair-flower-petals-white-dress-anime-girls-new-hd-wallpaper.jpg) no-repeat;
  background-size: cover;
  background-position: top;
  `

  return (
    <div>
    <Head>
        <title>AnimePost</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <meta name="description" content="AnimePost - descarga animes en 1080p con un solo click sin anuncios"></meta>
    </Head>
    <Nav/>
    <Discord/>
    <section css={home}>
          <div css={css`display:flex;`}>
           <img src="" alt=""/>
            <div css={css`position:relative;;margin:0 auto; text-align:center;margin-top:285px;`}>
                <p css={css`color:#fff;font-size:42px;font-weight: 500;text-shadow: 1px 2px 0 #000000af, 1px 7px 7px #000000af;`}>Descarga Animes 1080p, 720p Sin Publiciad</p>
                <p css={css`color:#fff;font-size:42px;font-weight: 500;text-shadow: 1px 2px 0 #000000af, 1px 7px 7px #000000af;`}>Y Disfruta De Nuestro Contenido  ;)</p>
                <p css={css`margin-top:10px;color:#B6B6B6 ;font-size:18px;font-weight: 500;text-shadow: 1px 2px 0 #000000af, 1px 7px 7px #000000af;`}>Colección ilimitada de anime. Somos la fuente definitiva de los mejores animes de alta calidad HD 720p / 1080p / 4K , formatos .mkv / .mp4 , visibles por teléfono móvil y tableta, de forma gratuita.</p>
            </div>
          </div>
      </section>
      <Footer/>
    </div>
  )
}

export default index
