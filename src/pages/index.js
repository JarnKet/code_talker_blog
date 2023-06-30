import { PostCard, Categories } from "../components";
import { getPosts } from "../services";
import { FeaturedPost, Hero } from "../sections";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { metaContent } from "../constants";
import Head from "next/head";
import { previewImg } from "/public";

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
      <Head>
        <title>Code Talker | ບົດຄວາມເພື່ອໂປຣແກຣມເມີ້</title>
        <meta name="keywords" content={metaContent.keyword.join(", ")} />
        <meta name="description" content={metaContent.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Code Talker | ບົດຄວາມເພື່ອໂປຣແກຣມເມີ້"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={previewImg} />
        <meta
          property="og:url"
          content="https://code-talker-blog.vercel.app/"
        />
        <meta
          property="og:description"
          content={`${metaContent.description}`}
        />
      </Head>

      <section className="container w-full h-screen px-8 py-10 lg:py-[0] mx-auto lg:px-10">
        <Hero />
      </section>

      <section className="container flex flex-col items-center justify-center w-full h-full px-8 py-6 mx-auto lg:items-start gap-y-6 lg:h-screen lg:p-10">
        <h1 className="text-4xl font-bold ">ບົດຄວາມທີ່ແນະນຳ.</h1>
        <FeaturedPost />
      </section>

      <section className="container flex flex-col items-center justify-center px-8 mx-auto mb-10 lg:min-h-screen lg:px-10 gap-y-6 lg:items-start">
        <h1 className="text-4xl font-bold ">ບົດຄວາມທັງໝົດ.</h1>
        <div
          id="postcard"
          className="grid grid-cols-1 gap-x-8 lg:grid-cols-12 "
        >
          <div className="col-span-1 p-8 shadow-xl lg:col-span-8 card dark:cardDark rounded-2xl">
            {dataLoaded &&
              posts.map((post) => (
                <PostCard post={post.node} key={post.title} />
              ))}
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative lg:sticky top-8 ">
              <Categories />
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
