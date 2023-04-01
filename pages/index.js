import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components';
import { getPosts } from '../services';
import { FeaturedPost } from '../sections';

export default function Home({ posts }) {
  return (
    <div className="  container mx-auto px-8 lg:px-10 mb-8">
      <Head>
        <title>Code Talker | ບົດຄວາມເພື່ອໂປຣແກຣມເມີ້</title>
        <meta name="keywords" content="Code Talker Blog, Blog, ບົດຄວາມ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full h-[85vh] justify-center items-center py-8 mb-4 ">
        <FeaturedPost />
      </div>

      <div
        id="postcard"
        className="w-full h-full flex flex-col items-center justify-center  "
      >
        <h1 className="text-4xl font-bold py-12 text-gradient">
          ບົດຄວາມທັງໝົດ
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 justify-items-center ">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <div className="lg:sticky relative top-8">
              <PostWidget
                styles={
                  'themeComponent hover:scale-105 transition-all ease-in-out duration-500'
                }
              />
              <Categories
                styles={
                  'card dark:cardDark hover:scale-105 transition-all ease-in-out duration-500'
                }
              />
            </div>
          </div>
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
