import React from 'react';
import PostContent from '../../components/posts/postDetail/PostContent';
import {getPostData, getPostsFiles} from '../../lib/postUtils';

const PostDetailsPage = (props) => {
  return <PostContent post={props.post} />;
};

export function getStaticPaths() {
  const postsFiles = getPostsFiles();

  const slugs = postsFiles.map((fileName) => fileName.replace(/\.md$/, ''));

  const paths = slugs.map((slug) => ({params: {slug}}));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const {
    params: {slug},
  } = context;

  const postData = getPostData(slug);

  return {
    props: {post: postData},
    revalidate: 600,
  };
}

export default PostDetailsPage;
