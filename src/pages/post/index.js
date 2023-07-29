import { useState, useEffect } from "react";
import { getAllPosts, getCategories } from "../../services";
import { Categories, PostCard, Pagination } from "../../components";

import Head from "next/head";

const Post = ({ posts, categories }) => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    setData(posts);

    setTotalPages(Math.ceil(posts.length / itemsPerPage));
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Head>
        <title>Code Talker | ບົດຄວາມທັງໝົດ</title>
      </Head>
      <section
        className={`container flex-col items-center justify-center px-8 py-12 mx-auto mb-10 lg:flex lg:min-h-screen lg:px-10 gap-y-6 `}
        id="postcard"
      >
        <h1 className="mb-4 text-4xl font-bold text-center">ບົດຄວາມລ່າສຸດ.</h1>
        <div
          id="postcard"
          className="grid grid-cols-1 gap-x-8 lg:grid-cols-12 "
        >
          <div className="col-span-1 lg:col-span-8 ">
            {subset?.map((post) => (
              <PostCard post={post} key={post.title} />
            ))}
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative lg:sticky top-8 ">
              <Categories categories={categories} />
            </div>
          </div>
        </div>
        <Pagination {...{ currentPage, totalPages, handlePageChange }} />
      </section>
    </>
  );
};

export default Post;

export async function getStaticProps() {
  const posts = (await getAllPosts()) || [];
  const categories = (await getCategories()) || [];

  return {
    props: { posts, categories },
    revalidate: 10,
  };
}
