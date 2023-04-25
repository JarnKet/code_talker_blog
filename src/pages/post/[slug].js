import Head from 'next/head';
import { useRouter } from 'next/router';
import { getPosts, getPostDetails } from '../../services';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '../../components';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="keywords" content={post.title} />
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={post.featuredImage.url} />
        <meta property="og:description" content={post.excerpt} />
      </Head>
      <div className="container px-8 mx-auto mt-10 mb-8 lg:px-10 lg:mb-0 lg:mt-0">
        <Link
          href={`/`}
          className="flex w-24 p-2 mb-4 font-bold text-white transition-all duration-500 ease-in-out rounded-full lg:hidden themeComponent hover:scale-110 "
        >
          <ArrowLeftIcon className="w-6 h-6 mr-2" />
          <p>ກັບຄືນ</p>
        </Link>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8 lg:border-r dark:border-r-neutral-700">
            <PostDetail post={post} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4 lg:py-20">
            <div className="relative lg:sticky top-8">
              <Author author={post.author} />
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
                styles={`card dark:cardDark`}
              />
              <Categories styles={'card dark:cardDark'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
