import { FeaturedPost, Hero } from "../sections";
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

      <section className="container flex items-center justify-center w-full min-h-[95vh] lg:min-h-[85vh] px-8 mx-auto  lg:px-10">
        <Hero />
      </section>

      <section
        id="postcard"
        className="container flex flex-col items-center justify-center w-full h-full px-8 py-6 mx-auto lg:items-start gap-y-6 lg:h-screen lg:p-10"
      >
        <h1 className="text-4xl font-bold ">ບົດຄວາມທີ່ແນະນຳ.</h1>
        <FeaturedPost posts={featuredPosts} />
        <Link
          className="p-4 font-semibold transition-all duration-300 rounded-full lg:hidden themeComponent lg:text-xl hover:scale-110"
          href={"post/"}
        >
          ບົດຄວາມທັງໝົດ
        </Link>
      </section>

      <section
        className={`container flex-col items-center hidden justify-center px-8 py-10 mx-auto mb-10 lg:flex lg:min-h-screen lg:px-10 gap-y-6 `}
        id="postcard"
      >
        <h1 className="mb-4 text-4xl font-bold text-center">ບົດຄວາມລ່າສຸດ.</h1>
        <div
          id="postcard"
          className="grid grid-cols-1 gap-x-8 lg:grid-cols-12 "
        >
          <div className="col-span-1 p-8 shadow-xl lg:col-span-8 card dark:cardDark rounded-2xl">
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
