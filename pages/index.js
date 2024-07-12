import FeaturedPosts from '../components/homepage/FeaturedPosts';
import HeroSection from '../components/homepage/HeroSection';

const HomePage = () => {
  const DUMMY_POSTS = [
    {
      title: 'Getting Started with NextJS',
      excerpt:
        'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2022-10-16',
      image: 'getting-started-nextjs.png',
      slug: 'getting-started-nextjs',
    },
    {
      title: 'Getting Started with NextJS',
      excerpt:
        'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2022-10-16',
      image: 'getting-started-nextjs.png',
      slug: 'getting-started-nextjs2',
    },
    {
      title: 'Getting Started with NextJS',
      excerpt:
        'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2022-10-16',
      image: 'nextjs-file-based-routing.png',
      slug: 'getting-started-nextjs3',
    },
    {
      title: 'Getting Started with NextJS',
      excerpt:
        'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2022-10-16',
      image: 'nextjs-file-based-routing.png',
      slug: 'getting-started-nextjs4',
    },
  ];

  return (
    <>
      <HeroSection />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
