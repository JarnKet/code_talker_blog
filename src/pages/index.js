import Hero from "../sections/Hero";
import { PostCard, Categories } from "../components";
import { getPosts, getFeaturedPosts, getCategories } from "../services";
import Link from "next/link";

import { metaContent } from "../constants";
import Head from "next/head";
import { previewImg } from "/public";

export default function Home({ posts, featuredPosts, categories }) {
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

      <section className="relative flex items-center justify-center min-h-screen">
        <Hero posts={featuredPosts} />
        <div className="hero__background lightGrid dark:darkGrid absolute inset-0 z-[-5] " />
      </section>

      <section
        className={`container flex-col items-center  justify-center px-8 py-10 mx-auto mb-10 flex lg:min-h-screen lg:px-10 gap-y-6 `}
        id="posts"
      >
        <h1 className="mb-4 text-4xl font-bold text-center">ບົດຄວາມລ່າສຸດ.</h1>
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-12 ">
          <div className="col-span-1 lg:col-span-8 ">
            {posts?.map((post) => (
              <PostCard post={post} key={post.title} />
            ))}
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative lg:sticky top-8 ">
              <Categories categories={categories} />
            </div>
          </div>
        </div>
        <Link
          className="p-4 font-semibold transition-all duration-300 rounded-full themeComponent lg:text-xl hover:scale-110"
          href={"post/"}
        >
          ບົດຄວາມທັງໝົດ
        </Link>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const featuredPosts = (await getFeaturedPosts()) || [];
  const categories = (await getCategories()) || [];

  return {
    props: { posts, featuredPosts, categories },
    revalidate: 10,
  };
}

// export async function getStaticPaths() {
//   const posts = (await getPosts()) || [];
//   console.log(posts);

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.slug },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: 'blocking' } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: true };
// }
