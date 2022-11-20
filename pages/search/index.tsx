import { useState, useEffect } from 'react';
import {css} from '@emotion/react'
import axios from 'axios';
import CircleStatus from '../../components/icons/circle'
import Link from 'next/link';
import styles from '../../components/css/grid.module.css'
import Head from 'next/head';
import Nav from '../../components/nav'
import Search from '../../components/icons/search'
import Footer from '../../components/footer';

const cardStyle = css`
  height: 540px;
  z-index:10;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  justify-content: center;
  align-content: center;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.54); 
  box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.54);
  transition: box-shadow 200ms;
  &:hover >  div img.cardImg {
    transform: scale(1.075);  
  }
  @media screen and (max-width: 1280px){
    width: 240px;
    height: 448px;
  }
  @media screen and (max-width: 1066px){
    width: 220px;
    height: 400px;
  }
  @media screen and (max-width: 937px){
    width: 200px;
    height: 375px;
  }
  @media screen and (max-width: 455px){
    width: 180px;
    height: 360px;
  }
  @media screen and (max-width: 420px){
    width: 165px;
    height: 333px;
  }
  @media screen and (max-width: 360px){
    width: 170px;
    height: 333px;
  }
  `
  
const statusStyle = css`
  position:absolute;
  background:#2c033f;
  color:#fff;
  top:0;
  font-size:12px;
  font-weight:600;
  letter-spacing:1px;
  justify-content:right;
  cursor:default;
  padding: 5px 10px;
  border-radius: 0px 0px 0px 10px;
  right:-1px;
  @media screen and (max-width: 1280px){
    font-size:13px;
  }
  @media screen and (max-width: 937px){
    font-size:10px;
  }
  @media screen and (max-width: 380px){
    font-size:8px;
  }
  `
 
const titleStyle = css`
  position:absolute;
  bottom:110px;
  text-align:center;
  backdrop-filter:blur(3px);
  width:100%;
  padding: 1rem 0.5rem;
  background: rgba(0, 0, 0, 0.573);
  @media screen and (max-width: 1280px){
    bottom:100px;
  }
  @media screen and (max-width: 1066px){
    bottom:100px;
  }
  @media screen and (max-width: 937px){
    bottom:99px;
  }
  @media screen and (max-width: 455px){
    padding: 0.7rem 0.3rem;
    bottom:99px;
  }
  @media screen and (max-width: 420px){
    bottom:97px;
  }
  @media screen and (max-width: 380px){
    bottom:97px;
  }
  `
  
const titlePStyle = css`
  font-size:15px;
  font-weight:700;
  letter-spacing:2px;
  color:#fff;
  padding:0 10px;
  cursor:default;
  text-shadow: 1px 2px 0 #000000af, 1px 7px 7px #000000af;
  @media screen and (max-width: 1280px){
    font-size:14px;
    font-weight:600;
  }
  @media screen and (max-width: 1066px){
    font-size:13px;
  }
  @media screen and (max-width: 937px){
    font-size:12px;
  }
  @media screen and (max-width: 455px){
    font-size:11px;
  }
  @media screen and (max-width: 380px){
    font-size:10px;
    font-weight:400;
  }
`

const imgStyle = css`
  z-index:0;
  transition: transform 200ms;
  height: 430px;
  width: 287px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  @media screen and (max-width: 1280px){
    transition: all 0.5s ease;
    width: 240px;
    height: 350px;
  }
  @media screen and (max-width: 1066px){
    transition: all 0.5s ease;
    width: 220px;
    height: 330px;
  }
  @media screen and (max-width: 937px){
    transition: all 0.5s ease;
    width: 200px;
    height: 275px;
  }
  @media screen and (max-width: 455px){
    transition: all 0.5s ease;
    width: 180px;
    height: 265px;
  }
  @media screen and (max-width: 420px){
    transition: all 0.5s ease;
    width: 165px;
    height: 235px;
  }
  @media screen and (max-width: 380px){
    transition: all 0.5s ease;
    width: 165px;
    height: 235px;
  }
`

const tagStyle = css`
  display: inline-block;
  padding: 5px 10px;
  font-weight:600;
  font-size:12px;
  text-align: center;
  -webkit-border-radius: 10px 0px 10px 0px;
  -moz-border-radius: 10px 0px 10px 0px;
  border-radius: 10px 0px 10px 0px;
  background: rgba(8, 8, 8, 0.548);
  border: 2px solid #7700ff;
  margin-right:10px;
  color: white;
  cursor:default;
  @media screen and (max-width: 1280px){
    font-size:10px;
  }
  @media screen and (max-width: 937px){
    font-size:9px;
    margin-right:5px;
  }
  @media screen and (max-width: 455px){
    font-size:8px;
  }
  @media screen and (max-width: 420px){
    font-size:7px;
  }
`

const tagContainer = css`
margin:0px auto;
margin-top: 10px;
margin-bottom: 10px;
text-align:center;
`

const cardLink = css`
  display:flex;
  align-items:center;
  justify-content:center;
  width:80%;
  color:#fff;
  font-weight:700;
  font-size:0.85rem;
  background-color:#6B17C5;
  padding:0.75rem;
  text-align:center;
  margin:auto;
  border-radius:0.75rem;
  margin-bottom:10px;
  cursor:pointer;
  border: 2px solid #7700ff;
  transition: box-shadow 200ms, background-color 200ms;
  &:hover {
    box-shadow: 0px 0px 16px rgba(61, 14, 128, 1);
    background-color: #7a0eed;
  }
  &:hover > xd{
    transform: rotate(-90deg);
  }
  @media screen and (max-width: 1280px){
    padding:0.55rem;
    font-size:0.65rem;
  }
`

const info = css`
  background: #380768;
  width:100%;
  bottom:0px;
  position:absolute;
`


const index = () => {
  const [anime, setAnime] = useState([]);
  const [tablaPosts, setTablaPosts]= useState([]);
  const [busqueda, setBusqueda]= useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      const res = await axios.get('http://localhost:3000/api/animes');
      setAnime(res.data);
      setTablaPosts(res.data);
    };

    fetchAnime();
  }, []);


  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar=(terminoBusqueda)=>{
    let resultadosBusqueda=tablaPosts.filter((search)=>{
      if(search.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ||search.secondtitle.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return search;
      }
    });
    setAnime(resultadosBusqueda);
  }

  let animeLimit = anime.slice(0,4);

  return (
    <main>
    <Head>
      <title>AnimePost</title>
    </Head>
    <Nav/>
    <div>
      <div css={css`margin:0 auto; text-align:center;margin-top:120px;margin-bottom:30px;border-bottom: 2px solid #fff;width:90%;`}>
        <Search width={24} height={24} fill={'#fff'} css={css`position:absolute;margin-top:16px;left:20;`}/>
        <input
          value={busqueda}
          placeholder="Buscar Anime..."
          onChange={handleChange}
          css={css`width:98%;height:60px;padding:0 35px;outline:none;background:none;border:none;font-size: 26px;color: #fff; &::placeholder{    color: #fff;
            font-size: 26px;
            font-weight: 400;
            justify-content: center;
            align-items: center;}`}
        />
      </div>
      <div className={styles.column}>

      {animeLimit.map(anime =>  (
            <div key={anime.id}>
              <div css={cardStyle}>
                  <div>
                    {(anime.poster) && <img src={anime.poster} alt={anime.title} css={imgStyle} className='cardImg'/>}
                    {(anime.status) && <p css={statusStyle}><CircleStatus height={10} width={10} css={css`margin-right:5px;`} fill={`${anime.statuscolor}`}/>{anime.status}</p>}
                    <div css={titleStyle}>
                      <p css={titlePStyle}>{anime.title}</p>
                    </div>
                  </div>
                  <div css={info}>
                    <div css={tagContainer}>
                      {(anime.category) && <p css={tagStyle}>{anime.category}</p>}
                      {(anime.year) &&<p css={tagStyle}>{anime.year}</p>}
                      <p css={tagStyle}>{anime.screen}</p>
                    </div>
                    <Link href={`/anime/${anime.url}`}>
                      <a css={cardLink}>
                        Descargar
                      </a>
                    </Link>
                  </div>
               </div>
            </div>
))}
        </div>
    </div>
    <Footer/>
    </main>
  );
};

export default index