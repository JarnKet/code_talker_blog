import { PostCard, Categories } from '../components';
import { getPosts } from '../services';
import { FeaturedPost, Hero } from '../sections';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <>
      <section className="border-b dark:border-b-neutral-700">
        <div className="container flex items-center justify-center w-full h-screen px-8 mx-auto lg:px-10">
          <Hero />
        </div>
      </section>

      <section className="container w-full h-full px-8 py-6 mx-auto lg:h-screen lg:py-12 lg:px-10">
        <div className="flex flex-col items-center justify-center w-full h-full shadow-lg card dark:cardDark">
          <div className="flex items-center justify-start w-full py-4 pl-4 border-b lg:pl-8 dark:border-b-neutral-700">
            <ChartBarIcon className="w-8 h-8 mr-2" />
            <h1 className="text-xl font-bold">ບົດຄວາມທີ່ແນະນຳ</h1>
          </div>
          <FeaturedPost />
        </div>
      </section>

      <section
        id="postcard"
        className="flex flex-col items-center justify-center w-full h-full border-t dark:border-t-neutral-700 "
      >
        <div className="container grid h-full grid-cols-1 px-8 mx-auto lg:grid-cols-12 justify-items-center lg:px-10">
          <div className="col-span-1 py-8 lg:col-span-8 lg:border-r dark:border-r-neutral-700">
            {dataLoaded &&
              posts.map((post) => (
                <PostCard post={post.node} key={post.title} />
              ))}
          </div>
          <div className="hidden px-10 lg:block lg:col-span-4 lg:px-12 ">
            <div className="relative lg:sticky top-8">
              <Categories styles={''} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];

//   return {
//     props: { posts },
//   };
// }