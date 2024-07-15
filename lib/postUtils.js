import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postDir = path.join(process.cwd(), 'content', 'posts');

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); //removes the file extension

  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const {data, content} = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getPostsFiles() {
  return fs.readdirSync(postDir);
}

export function getAllPosts() {
  const postsFiles = getPostsFiles();
  const allPosts = postsFiles.map((post) => {
    return getPostData(post);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
