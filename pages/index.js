import Head from 'next/head';
import { PostCard, Categories } from '../components';
import { getPosts } from '../services';
import { FeaturedPost, Hero } from '../sections';
import { ChartBarIcon } from '@heroicons/react/24/outline';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Code Talker | ບົດຄວາມເພື່ອໂປຣແກຣມເມີ້</title>
        <meta name="keywords" content="Code Talker Blog, Blog, ບົດຄວາມ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="border-b dark:border-b-neutral-700">
        <div className="container mx-auto px-8 lg:px-10 flex w-full h-screen justify-center items-center">
          <Hero />
        </div>
      </section>

      <section className="lg:h-screen h-full w-full py-6 lg:py-12 container mx-auto px-8 lg:px-10">
        <div className="card dark:cardDark flex flex-col w-full h-full  justify-center items-center shadow-lg">
          <div className="flex justify-start items-center w-full lg:pl-8 pl-4 py-4 border-b dark:border-b-neutral-700">
            <ChartBarIcon className="w-8 h-8 mr-2" />
            <h1 className="font-bold text-xl">ບົດຄວາມທີ່ແນະນຳ</h1>
          </div>
          <FeaturedPost />
        </div>
      </section>

      <section
        id="postcard"
        className="w-full h-full flex flex-col items-center justify-center  border-t dark:border-t-neutral-700 "
      >
        <div className="h-full grid grid-cols-1 lg:grid-cols-12 justify-items-center container mx-auto px-8 lg:px-10">
          <div className="lg:col-span-8 col-span-1 lg:border-r dark:border-r-neutral-700 py-8">
            {posts.map((post) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="hidden lg:block lg:col-span-4 px-10 lg:px-12 ">
            <div className="lg:sticky relative top-8">
              <Categories styles={''} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
