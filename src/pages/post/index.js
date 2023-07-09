import { getPosts, getCategories } from "../../services";
import { Categories, PostCard } from "../../components";
import Head from "next/head";

const Post = ({ posts, categories }) => {
  return (
    <>
      <Head>
        <title>Code Talker | ບົດຄວາມທັງໝົດ</title>
      </Head>
      <section
        className={`container flex-col items-center justify-center px-8 py-10 mx-auto mb-10 lg:flex lg:min-h-screen lg:px-10 gap-y-6 `}
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
};

export default Post;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const categories = (await getCategories()) || [];

  return {
    props: { posts, categories },
    revalidate: 10,
  };
}

// export async function getStaticPaths() {
//   const posts = (await getPosts()) || [];
//   console.log(posts);

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: 'blocking' } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: "blocking" };
// }
