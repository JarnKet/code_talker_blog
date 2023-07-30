import Head from "next/head";
import { useRouter } from "next/router";
import { getPosts, getPostDetails, getCategories } from "../../services";
import Link from "next/link";
import { useState, useEffect } from "react";

import {
  ArrowLeftIcon,
  ArrowUturnUpIcon,
  QueueListIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
  PostReference,
  ShareButton,
} from "../../components";

const PostDetails = ({ post, categories }) => {
  const [toggle, setToggle] = useState(false);
  const [url, setUrl] = useState(undefined);

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  useEffect(() => {
    const getCurrentPageUrl = () => {
      if (typeof window !== "undefined") {
        return window.location.toString();
      }
      return "";
    };

    const shareUrl = getCurrentPageUrl();
    setUrl(shareUrl);
  }, []);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="keywords" content={post.title} />
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage.url} />
      </Head>
      <section
        className="container px-8 mx-auto mt-[3rem] mb-8 lg:px-10 lg:mb-0 lg:mt-3"
        id="post"
      >
        <Link
          href={router.asPath}
          className="flex w-24 p-2 mb-4 font-bold text-white transition-all duration-300 ease-in-out rounded-2xl lg:hidden themeComponent hover:scale-110 "
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="w-6 h-6 mr-2" />
          <p>ກັບຄືນ</p>
        </Link>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 justify-items-center">
          <div className="hidden w-full col-span-3 mt-8 lg:block">
            <div className="relative lg:sticky top-8">
              <ShareButton url={url} />
              <PostReference post={post} />
            </div>
          </div>
          <article className="col-span-1 lg:col-span-6 lg: ">
            <PostDetail post={post} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </article>
          <div className="col-span-1 lg:col-span-3 lg:py-[5.5rem]">
            <div className="relative lg:sticky top-8">
              <Author author={post.author} />
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
                styles={`themeComponentRevert`}
              />
              <Categories
                styles={"themeComponentRevert"}
                categories={categories}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="fixed z-10 flex flex-col gap-y-4 bottom-16 right-6">
        <button
          type="button"
          className="flex items-center justify-end p-2 text-white transition-all duration-300 bg-black rounded-full cursor-pointer lg:hidden dark:bg-white dark:text-black hover:scale-110"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowUturnUpIcon className="w-6 h-6 " />
        </button>
        <button
          className="flex items-center justify-end p-2 text-white transition-all duration-300 bg-black rounded-full cursor-pointer lg:hidden dark:bg-white dark:text-black hover:scale-110"
          typeof="button"
          aria-label="reference"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? (
            <XCircleIcon className="w-6 h-6 " />
          ) : (
            <QueueListIcon className="w-6 h-6 " />
          )}
        </button>
      </div>
      {toggle && (
        <div className="fixed z-20 w-full px-8 bottom-[12rem] flex flex-col gap-y-4">
          <PostReference post={post} />
          <ShareButton url={url} />
        </div>
      )}
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  const categories = await getCategories();

  return {
    props: { post: data, categories },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: true,
  };
}
