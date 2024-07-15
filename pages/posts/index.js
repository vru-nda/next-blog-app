import Head from 'next/head';

import AllPosts from '../../components/posts/AllPosts';
import {getAllPosts} from '../../lib/postUtils';

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name='description' content='A list of all blog posts' />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {posts: allPosts},
  };
}

export default AllPostsPage;
