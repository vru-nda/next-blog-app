import FeaturedPosts from '../components/homepage/FeaturedPosts';
import HeroSection from '../components/homepage/HeroSection';
import {getFeaturedPosts} from '../lib/postUtils';

const HomePage = (props) => {
  return (
    <>
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
