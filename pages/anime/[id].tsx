import Head from "next/head"
import {css} from '@emotion/react'
import Circle from '../../components/icons/circle'
import Audio from '../../components/icons/audio'
import Sub from '../../components/icons/sub'
import Timer from '../../components/icons/timer'
import style from '../style.module.css'
import Link from "next/link"
import Nav from "../../components/nav"
import Download from "../../components/icons/download"
import Footer from "../../components/footer"
import CheckDown from "../../components/icons/checkDown"

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/animes/');
    const data = await res.json();
  
    const paths = data.map(anime => {
      return {
        params: { id: anime.url.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:3000/api/animes/${id}`);
    const data = await res.json();
  
    return {
      props: { anime: data }
    }
}


const poster = css`
margin-top:160px;
border-radius:10px;
-webkit-box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.22); 
box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.22);
width:290px;
height:430px;
transition: 0.5s ease;
@media screen and (max-width: 1063px){
  width:260px;
  height:380px;
  margin-top:200px;
}
@media screen and (max-width: 900px){
  width:240px;
  height:360px;
  margin-top:230px;
}
@media screen and (max-width: 884px){
  width:220px;
  height:330px;
  margin-top:260px;
}
@media screen and (max-width: 850px){
  display:none;
}
`

const posterMobile = css`
margin-top:100px;
-webkit-box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.22); 
box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.22);
width:240px;
height:350px;
display:none;
transition: 0.5s ease;
@media screen and (max-width: 850px){
  display:block;
}
`

const containerMobile = css`
  margin-top:10px;
  margin-left:40px;
  margin-right:40px;
  display:none;
  @media screen and (max-width: 850px){
    display:block;
  }
  @media screen and (max-width: 652px){
    margin-left:30px;
  }
  @media screen and (max-width: 600px){
    margin-left:20px;
  }
`

const overview = css`
transition: 0.5s ease;
color:#fff; width:100%;
@media screen and (max-width: 1349px){
  font-size:15px;
  width:100%;
}
@media screen and (max-width: 1130px){
  font-size:13px;
  width:100%;
}

@media screen and (max-width: 865px){
  font-size:11px;
  width:100%;
}
`

const Details = ({ anime }) => {

const home = css`
  position: relative;
  font-size: 1em;
  padding: 0 150px;
  transition: 0.5s ease;
  transition-property: padding;
  min-height: 80vh;
  background: linear-gradient(rgba(195, 0, 255, 0.24) 0%, rgb(40, 4, 41) 100%), url(${anime.backdrop}) no-repeat;
  background-size: cover;
  background-position: top;
  backdrop-filter: blur(10px);
  @media screen and (max-width: 1332px){
    padding: 0 100px;
  }
  @media screen and (max-width: 1032px){
    padding: 0 50px;
  }
  @media screen and (max-width: 850px){
    min-height: 60vh;
  }
  `

  return (
    <div>
      <Head>
          <title>{anime.title} - AnimePost</title>
      </Head>
      <Nav/>
      <section css={home}>
          <div css={css`display:flex;`}>
            {(anime.poster) && <img src={anime.poster} alt="" css={poster}/>}
            <div css={css`margin:0 auto; text-align:center;display:none;  @media screen and (max-width: 850px){display:block;}`}>
            {(anime.poster) && <img src={anime.poster} alt="" css={posterMobile}/>}
            </div>
            <div css={css`position:relative;-webkit-box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.22); box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.22);backdrop-filter:blur(20px);padding:20px 20px;width:70%;border-radius:10px;;margin-left:30px;margin-top:285px;@media screen and (max-width: 1076px){}  @media screen and (max-width: 850px){
    display:none;
  }`}>

                {(anime.title) && <p css={css`color:#fff;font-size:42px;font-weight: 600;@media screen and (max-width: 865px){font-size:32px;}`}>{anime.title}</p>}

                {(anime.status) &&  <span css={css`color:#fff; font-size:16px; padding: 3px 10px; background-color:#32005c; -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); 
                box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); border-radius: 0px 10px 0px 10px; margin-right:10px;
                margin-top:10px; margin-bottom:10px; transition: 0.5s ease; display:inline-block;
                @media screen and (max-width: 1100px){font-size:14px;margin-right:5px;}`}>
                <Circle fill={`${anime.statuscolor}`} width={10} height={10} css={css`margin-right:5px;`}/>{anime.status}</span>}

                {(anime.season) &&  <span css={css`color:#fff; font-size:16px; padding: 3px 10px; background-color:#32005c; -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); 
                box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); border-radius: 0px 10px 0px 10px; margin-right:10px;
                margin-top:10px; margin-bottom:10px; transition: 0.5s ease; display:inline-block;
                @media screen and (max-width: 1100px){
                    font-size:14px;
                    margin-right:5px;}`}>
                {anime.season}</span>}
                
                {(anime.year) &&  <span css={css`color:#fff; font-size:16px; padding: 3px 10px; background-color:#32005c; -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); 
                box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); border-radius: 0px 10px 0px 10px; margin-right:10px;
                margin-top:10px; margin-bottom:10px; transition: 0.5s ease; display:inline-block;
                @media screen and (max-width: 1100px){
                    font-size:14px;
                    margin-right:5px;}`}>
                {anime.year}</span>}

                {(anime.audio) &&  <span css={css`color:#fff; font-size:16px; padding: 3px 10px; background-color:#32005c; -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); 
                box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); border-radius: 0px 10px 0px 10px; margin-right:10px;
                margin-top:10px; margin-bottom:10px; transition: 0.5s ease; display:inline-block;
                @media screen and (max-width: 1100px){
                    font-size:14px;
                    margin-right:5px;}`}>
                <Audio fill={`#fff`} width={13} height={13} css={css`margin-right:5px;margin-top:5px;`}/>{anime.audio}</span>}

                {(anime.sub) &&  <span css={css`color:#fff; font-size:16px; padding: 3px 10px; background-color:#32005c; -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); 
                box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); border-radius: 0px 10px 0px 10px; margin-right:10px;
                margin-top:10px; margin-bottom:10px; transition: 0.5s ease; display:inline-block;
                @media screen and (max-width: 1100px){
                    font-size:14px;
                    margin-right:5px;}`}>
                <Sub fill={`#fff`} width={13} height={13} css={css`margin-right:5px;margin-top:5px;`}/>{anime.sub}</span>}

                {(anime.descrip) && <p css={overview}>{anime.descrip}</p>}
                
                {(anime.timer) && <span css={css`color:#fff; font-size:16px;
                    padding: 3px 10px; background-color:#32005c; border-radius: 7px;width:95%;margin-top:20px;text-align:center;
                    margin-right:10px; display:inline-block;position:absolute;bottom:20px;@media screen and (max-width: 1100px){
                      font-size:14px;
                      margin-right:5px;} `}>
                  <Timer width={16} height={16}  css={css`margin-right:5px;margin-top:5px;`}/><b css={css`margin-top:-15px;font-size:17px;font-weight:600;@media screen and (max-width: 1100px){
                    font-size:15px;
                    margin-right:5px;}`}>Proximo Episodio:</b> {anime.timer}</span>}
            </div>
          </div>
      </section>

      <div css={containerMobile}>
        {(anime.title) && <p css={css`color:#fff;font-size:32px;font-weight: 600;`}>{anime.title}</p>}
        <div css={css`margin-top:10px;margin-bottom:10px;`}>
          {(anime.status) &&  <span css={css`color:#fff; font-size:14px; padding: 3px 10px; background-color:#32005c; -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); 
                  box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); border-radius: 0px 10px 0px 10px; margin-right:10px;
                margin-bottom:10px; transition: 0.5s ease; display:inline-block;`}>
                  <Circle fill={`${anime.statuscolor}`} width={8} height={8} css={css`margin-right:5px;`}/>
          {anime.status}</span>}

          {(anime.season) &&  <span css={css`color:#fff; font-size:14px; padding: 3px 10px; background-color:#32005c; -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); 
                  box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); border-radius: 0px 10px 0px 10px; margin-right:10px;
                  margin-bottom:10px; transition: 0.5s ease; display:inline-block;`}>
          {anime.season}</span>}

          {(anime.year) &&  <span css={css`color:#fff; font-size:14px; padding: 3px 10px; background-color:#32005c; -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); 
                  box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); border-radius: 0px 10px 0px 10px; margin-right:10px;
                  margin-bottom:10px; transition: 0.5s ease; display:inline-block;`}>
          {anime.year}</span>}

          {(anime.audio) &&  <span css={css`color:#fff; font-size:14px; padding: 3px 10px; background-color:#32005c; -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); 
                  box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); border-radius: 0px 10px 0px 10px; margin-right:10px;
                  margin-bottom:10px; transition: 0.5s ease; display:inline-block;`}>
                  <Audio fill={`#fff`} width={10} height={10} css={css`margin-right:5px;margin-top:5px;`}/>
          {anime.audio}</span>}

          {(anime.sub) &&  <span css={css`color:#fff; font-size:14px; padding: 3px 10px; background-color:#32005c; -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); 
                  box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.13); border-radius: 0px 10px 0px 10px; margin-right:10px;
                  margin-bottom:10px; transition: 0.5s ease; display:inline-block;`}>
                  <Sub fill={`#fff`} width={10} height={10} css={css`margin-right:5px;margin-top:5px;`}/>
          {anime.sub}</span>}

          {(anime.descrip) && <p css={css`color:#fff; font-size:14px;`}>{anime.descrip}</p>}

          {(anime.timer) && <span css={css`color:#fff; font-size:14px;
              padding: 3px 10px; background-color:#32005c; border-radius: 7px;width:100%;margin-top:20px;text-align:center;
              display:inline-block;`}>
              <Timer width={12} height={12}  css={css`margin-right:5px;margin-top:5px;`}/><b css={css`margin-top:-15px;font-size:17px;font-weight:600;@media screen and (max-width: 1100px){
              font-size:15px; margin-right:5px;}`}>Proximo Episodio:</b> 
          {anime.timer}</span>}
        </div>
      </div>

      {(anime.opcion1cap1) && <div className={style.containerlink} css={css`margin-top:30px;margin-bottom:30px;`}>
          <form action="">
          <input type="checkbox" id={anime.opcion1title} className={style.check}/>
          <label htmlFor={anime.opcion1title}  className={style.checkbtn}>
            <div className={style.selectbox}>
              <div className={style.select}>
                <div className={style.contenidoselect}>
                  {(anime.opcion1title) && <h1>{anime.opcion1title}</h1>}
                  {(anime.opcion1info) && <p>{anime.opcion1info}</p>}
                </div>
                <CheckDown fill={'white'} width={24} height={24}/>
              </div>
            </div>
            </label>
            
            {(anime.opcion1cap1) && <Link href={`${anime.opcion1cap1}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 01</p>
                </div>
                {(anime.opcion1cap1size) && <p>{anime.opcion1cap1size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap2) && <Link href={`${anime.opcion1cap2}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 02</p>
                </div>
                {(anime.opcion1cap2size) && <p>{anime.opcion1cap2size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap3) && <Link href={`${anime.opcion1cap3}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 03</p>
                </div>
                {(anime.opcion1cap3size) && <p>{anime.opcion1cap3size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap4) && <Link href={`${anime.opcion1cap4}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 04</p>
                </div>
                {(anime.opcion1cap4size) && <p>{anime.opcion1cap4size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap5) && <Link href={`${anime.opcion1cap5}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 05</p>
                </div>
                {(anime.opcion1cap5size) && <p>{anime.opcion1cap5size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap6) && <Link href={`${anime.opcion1cap6}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 06</p>
                </div>
                {(anime.opcion1cap6size) && <p>{anime.opcion1cap6size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap7) && <Link href={`${anime.opcion1cap7}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 07</p>
                </div>
                {(anime.opcion1cap7size) && <p>{anime.opcion1cap7size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap8) && <Link href={`${anime.opcion1cap8}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 08</p>
                </div>
                {(anime.opcion1cap8size) && <p>{anime.opcion1cap8size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap9) && <Link href={`${anime.opcion1cap9}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 09</p>
                </div>
                {(anime.opcion1cap9size) && <p>{anime.opcion1cap9size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            
            {(anime.opcion1cap10) && <Link href={`${anime.opcion1cap10}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 10</p>
                </div>
                {(anime.opcion1cap10size) && <p>{anime.opcion1cap10size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap11) && <Link href={`${anime.opcion1cap11}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 11</p>
                </div>
                {(anime.opcion1cap11size) && <p>{anime.opcion1cap11size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap12) && <Link href={`${anime.opcion1cap12}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 12</p>
                </div>
                {(anime.opcion1cap12size) && <p>{anime.opcion1cap12size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap13) && <Link href={`${anime.opcion1cap13}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 13</p>
                </div>
                {(anime.opcion1cap13size) && <p>{anime.opcion1cap13size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap14) && <Link href={`${anime.opcion1cap14}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 14</p>
                </div>
                {(anime.opcion1cap14size) && <p>{anime.opcion1cap14size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap15) && <Link href={`${anime.opcion1cap15}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 15</p>
                </div>
                {(anime.opcion1cap15size) && <p>{anime.opcion1cap15size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap16) && <Link href={`${anime.opcion1cap16}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 16</p>
                </div>
                {(anime.opcion1cap16size) && <p>{anime.opcion1cap16size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap17) && <Link href={`${anime.opcion1cap17}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 17</p>
                </div>
                {(anime.opcion1cap17size) && <p>{anime.opcion1cap17size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap18) && <Link href={`${anime.opcion1cap18}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 18</p>
                </div>
                {(anime.opcion1cap18size) && <p>{anime.opcion1cap18size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap19) && <Link href={`${anime.opcion1cap19}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 19</p>
                </div>
                {(anime.opcion1cap19size) && <p>{anime.opcion1cap19size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap20) && <Link href={`${anime.opcion1cap20}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 20</p>
                </div>
                {(anime.opcion1cap20size) && <p>{anime.opcion1cap20size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            {(anime.opcion1cap21) && <Link href={`${anime.opcion1cap21}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 21</p>
                </div>
                {(anime.opcion1cap21size) && <p>{anime.opcion1cap21size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            
            {(anime.opcion1cap22) && <Link href={`${anime.opcion1cap22}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 22</p>
                </div>
                {(anime.opcion1cap22size) && <p>{anime.opcion1cap22size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            
            {(anime.opcion1cap23) && <Link href={`${anime.opcion1cap23}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 23</p>
                </div>
                {(anime.opcion1cap24size) && <p>{anime.opcion1cap24size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}

            
            {(anime.opcion1cap24) && <Link href={`${anime.opcion1cap24}`}>
              <div className={style.contentopciones}>
              <div className={style.opciones}>
                <div className={style.contenidoopcion}>
                  <p>{anime.title} - 24</p>
                </div>
                {(anime.opcion1cap24size) && <p>{anime.opcion1cap24size} <Download width={16} height={16} fill={'#fff'}/></p>}
              </div>
              </div>
            </Link>}
          </form>
        </div>}
        <Footer/>
    </div>
  );
}
  
export default Details