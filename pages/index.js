import Head from 'next/head';

import FeaturedPosts from '../components/homepage/FeaturedPosts';
import HeroSection from '../components/homepage/HeroSection';
import {getFeaturedPosts} from '../lib/postUtils';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <HeroSection />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {posts: featuredPosts},
  };
}

export default HomePage;
