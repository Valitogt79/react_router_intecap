import React from 'react';
import posts from '../data/posts';
import { NavLink } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <h3>Página de Blog</h3>
      <p>Esta es la página del blog</p>
      <br />
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
          </li>
          ))}
          <br />
      </ul>
    </div>
  );
};

export default Blog;
