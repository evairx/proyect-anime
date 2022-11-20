import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination'
import axios from 'axios';
import Nav from '../../components/nav';
import Head from 'next/head';
import Footer from '../../components/footer';
import {css} from '@emotion/react'

const index = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(18);

  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3000/api/animes');
      setAnime(res.data);
      setLoading(false);
    };

    fetchAnime();
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = anime.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = pageNumber => setCurrentPage(pageNumber);


  

  return (
    <div >
      <Head>
        <title>Directorio Anime - AnimePost</title>
      </Head>
      <Nav/>
      <div css={css`margin-top:100px;`}></div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={anime.length}
        paginate={paginate}
      />
      <Card anime={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={anime.length}
        paginate={paginate}
      />
      <Footer/>
    </div>
  );
};

export default index