import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { FeaturedPost } from '../sections';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Code Talker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPost />

      <div
        id="postcard"
        className="w-full  flex flex-col items-center justify-center mt-32 "
      >
        <h1 className=" font-bold text-4xl mb-8">ບົດຄວາມລ່າສຸດ</h1>
        <div className="grid grid-cols-1 gap-12 ">
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
