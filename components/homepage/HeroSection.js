import Image from 'next/image';

import classes from './hero.module.css';

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/vrunda.png'
          alt='An image showing the user'
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I'm Vrunda</h1>
      <p>
        I blog about web development, mostly frontend frameworks like React.js.
      </p>
    </section>
  );
};

export default HeroSection;
