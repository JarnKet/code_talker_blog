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
        <meta name="keywords" content={`${post.title}`} />
      </Head>
      <div className="container mx-auto px-8 lg:px-10 mb-8 lg:mb-0 mt-10 lg:mt-0">
        <Link
          href={`/`}
          className="flex mb-4 font-bold p-2 lg:hidden themeComponent hover:scale-110 transition-all ease-in-out duration-500 text-white rounded-full w-24 "
        >
          <ArrowLeftIcon className="w-6 h-6 mr-2" />
          <p>ກັບຄືນ</p>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8  lg:border-r dark:border-r-neutral-700">
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
