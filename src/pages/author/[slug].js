import { useRouter } from "next/router";
import { getAuthor, getAuthorPosts, getAuthors } from "../../services";
import { PostCard, Author, Loader } from "../../components";
import Head from "next/head";

const AuthorDetail = ({ author }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Code Talker | {author.name}</title>
      </Head>
      <section className="container px-8 mx-auto mt-[4rem] mb-8 lg:px-10  ">
        <div className="grid grid-cols-1 lg:gap-12 lg:grid-cols-12">
          <div className="order-last col-span-1 p-4 lg:col-span-8 lg:order-first ">
            <h1
              className="w-full py-8 text-3xl font-bold sm:text-5xl"
              key={author.name}
            >
              {author.name + "."}
            </h1>

            <div className="p-4 card dark:cardDark rounded-2xl">
              {author.posts?.map((post) => (
                <PostCard post={post} key={post.title} />
              ))}
            </div>
          </div>
          <div className="order-first col-span-1 lg:col-span-4 lg:py-20 lg:order-last">
            <div className="relative lg:sticky top-8">
              <Author author={author} key={author.name} />
            </div>
          </div>
        </div>
      </section>
      <h1>test</h1>
    </>
  );
};

export default AuthorDetail;

export async function getStaticProps({ params }) {
  const author = await getAuthor(params.slug);

  return {
    props: { author },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const authors = await getAuthors();

  return {
    paths: authors.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
