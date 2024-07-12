import React from 'react';

import PostHeader from './PostHeader';
import classes from './post-content.module.css';

const DUMMY_POST = {
  title: 'Getting Started with NextJS',
  date: '2022-10-16',
  image: 'getting-started-nextjs.png',
  slug: 'getting-started-nextjs',
  content: '# This is a first post.',
};

const PostContent = ({post = DUMMY_POST}) => {
  const imagePath = `/images/posts/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {post.content}
    </article>
  );
};

export default PostContent;
