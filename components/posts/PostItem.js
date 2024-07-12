import Image from 'next/image';
import Link from 'next/link';

import classes from './post-item.module.css';

const PostItem = ({post}) => {
  const {title, date, image, slug, excerpt} = post;

  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout='responsive' //imp
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time datetime=''>{formatedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
