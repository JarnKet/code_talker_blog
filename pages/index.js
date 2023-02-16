import Head from 'next/head';
import { PostCard } from '../components';
import { getPosts } from '../services';
import { FeaturedPost } from '../sections';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 scrollBarTheme">
      <Head>
        <title>Code Talker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full h-screen justify-center items-center ">
        <FeaturedPost />
      </div>

      <div
        id="postcard"
        className="w-full h-full flex flex-col items-center justify-center pt-28 "
      >
        <div className="mb-8 border-b-2 border-black dark:border-white p-4">
          <h1 className=" font-bold text-4xl ">ບົດຄວາມລ່າສຸດ</h1>
        </div>

        <div className="grid grid-cols-1 gap-12 justify-items-center">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
