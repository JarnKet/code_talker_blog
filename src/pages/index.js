import { FeaturedPost, Hero } from "../sections";
import Link from "next/link";

import { metaContent } from "../constants";
import Head from "next/head";
import { previewImg } from "/public";
import Post from "./post";

export default function Home() {
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

      <section className="container flex items-center justify-center w-full min-h-[95vh] lg:min-h-[85vh] px-8 mx-auto  lg:px-10">
        <Hero />
      </section>

      <section
        id="postcard"
        className="container flex flex-col items-center justify-center w-full h-full px-8 py-6 mx-auto lg:items-start gap-y-6 lg:h-screen lg:p-10"
      >
        <h1 className="text-4xl font-bold ">ບົດຄວາມທີ່ແນະນຳ.</h1>
        <FeaturedPost />
        <Link
          className="p-4 font-semibold transition-all duration-300 rounded-full lg:hidden themeComponent lg:text-xl hover:scale-110"
          href={"post/"}
        >
          ບົດຄວາມທັງໝົດ
        </Link>
      </section>

      <section>
        <Post style={"hidden"} />
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
