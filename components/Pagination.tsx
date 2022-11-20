import React from 'react';
import { css } from '@emotion/react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul css={css`margin:0 auto; text-align:center;margin-top:30px;margin-bottom:30px;`}>
        {pageNumbers.map(number => (
              <ul css={css`display:inline; center;cursor:pointer;`}>
                <li onClick={() => paginate(number)}  css={css`background-color: rgb(63 63 70);display: inline-flex;border-radius:3px;padding:10px 13px;margin-right:5px;transition:ease .2s;&:hover{	background-color: rgb(147 51 234);}`}>
                  <a css={css`color: rgb(216 180 254);text-decoration:none;`}>
                    {number}
                  </a>
                </li>
              </ul>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;