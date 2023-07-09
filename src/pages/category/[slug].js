import { useRouter } from "next/router";
import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";
import { TagIcon } from "@heroicons/react/24/solid";
import Head from "next/head";

const CategoryPost = ({ posts, categories }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>
          Code Talker | ໝວດໝູ່{" "}
          {categories
            .filter((category) => category.slug === router.asPath.slice(10))
            .map((category) => category.name)}
        </title>
      </Head>

      <section className="my-20">
        <div className="container flex flex-col items-center px-8 py-4 mx-auto mb-12 lg:items-start lg:px-10">
          <div className="flex items-start justify-center mb-4 lg:items-baseline ">
            <div className="items-center justify-center hidden mr-2 lg:flex">
              <TagIcon className="w-8 h-8" />
            </div>

            <div>
              <div className="flex items-center justify-center lg:justify-normal">
                <TagIcon className="w-8 h-8 mr-2 lg:hidden " />
                {categories
                  .filter(
                    (category) => category.slug === router.asPath.slice(10)
                  )
                  .map((category) => (
                    <h1 className="text-3xl font-bold sm:text-5xl">
                      {category.name}
                    </h1>
                  ))}
              </div>

              <div className="mt-4 ">
                {categories
                  .filter(
                    (category) => category.slug === router.asPath.slice(10)
                  )
                  .map((category) => (
                    <p className="mt-4 text-neutral-600 dark:text-neutral-400 sm:text-lg lg:block">
                      {category.quote}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="container grid grid-cols-1 gap-12 px-8 mx-auto lg:px-10 lg:grid-cols-12">
            <div className="col-span-1 p-4 lg:col-span-8 card dark:cardDark rounded-2xl ">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                <Categories categories={categories} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const categories = await getCategories();

  return {
    props: { posts, categories },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
