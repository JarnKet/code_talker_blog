import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getAuthorPosts, getAuthors } from "../../services";
import { PostCard, Author, Loader } from "../../components";
import Head from "next/head";

const AuthorDetail = ({ params, authors }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const [posts, setPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAuthorPosts(params.slug).then((result) => {
      setPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          Code Talker | {""}
          {authors
            .filter((author) => author.slug === router.asPath.slice(8))
            .map((author) => author.name)}
        </title>
      </Head>
      <section className="container px-8 mx-auto mt-[6rem] mb-8 lg:px-10  ">
        <div className="grid grid-cols-1 lg:gap-12 lg:grid-cols-12">
          <div className="order-last col-span-1 p-4 lg:col-span-8 lg:order-first ">
            {authors
              .filter((author) => author.slug === router.asPath.slice(8))
              .map((author) => (
                <h1
                  className="w-full py-8 text-3xl font-bold sm:text-5xl"
                  key={author.name}
                >
                  {author.name + "."}
                </h1>
              ))}
            <div className="p-4 card dark:cardDark rounded-2xl">
              {dataLoaded &&
                posts.map((post) => <PostCard post={post} key={post.title} />)}
            </div>
          </div>
          <div className="order-first col-span-1 lg:col-span-4 lg:py-20 lg:order-last">
            <div className="relative lg:sticky top-8">
              {authors
                .filter((author) => author.slug === router.asPath.slice(8))
                .map((author) => (
                  <Author author={author} key={author.name} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorDetail;

export async function getStaticProps({ params }) {
  // const posts = await getAuthorPosts(params.slug);
  const authors = await getAuthors();

  return {
    props: { authors, params },
  };
}

export async function getStaticPaths() {
  const authors = await getAuthors();

  return {
    paths: authors.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
