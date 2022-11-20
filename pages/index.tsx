import Head from 'next/head'
import Nav from '../components/nav';

const index=()=>{
  
  return (
    <div>
    <Head>
        <title>AnimePost</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <meta name="description" content="AnimePost - descarga animes en 1080p con un solo click sin anuncios"></meta>
    </Head>
    <Nav/>
    </div>
  )
}

export default index
