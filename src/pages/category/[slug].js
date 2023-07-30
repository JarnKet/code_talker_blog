import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader, Pagination } from "../../components";
import { TagIcon } from "@heroicons/react/24/solid";
import Head from "next/head";

const CategoryPost = ({ posts, categories }) => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    setData(posts);

    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    window.scrollTo(0, 0);
  };

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
            <div className="col-span-1 lg:col-span-8 ">
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
        {subset.length <= 10 ? (
          <></>
        ) : (
          <Pagination {...{ currentPage, totalPages, handlePageChange }} />
        )}
      </section>
    </>
  );
};
export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const categories = await getCategories();

  return {
    props: { posts, categories },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
