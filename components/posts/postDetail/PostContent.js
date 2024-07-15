import React from 'react';
import ReactMarkDown from 'react-markdown';

import PostHeader from './PostHeader';
import classes from './post-content.module.css';

const PostContent = ({post}) => {
  const imagePath = `/images/posts/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkDown>{post.content}</ReactMarkDown>
    </article>
  );
};

export default PostContent;
