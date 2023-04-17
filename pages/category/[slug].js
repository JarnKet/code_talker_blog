import { useRouter } from 'next/router';
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';
import { TagIcon } from '@heroicons/react/24/solid';

const CategoryPost = ({ posts, categories }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="mt-12">
      <div className="flex flex-col mb-12 container mx-auto items-center lg:items-start py-4  px-8 lg:px-10">
        <div className="flex  mb-4">
          <TagIcon className="w-8 h-8 mt-2 mr-2" />
          {categories
            .filter((category) => category.slug === router.asPath.slice(10))
            .map((category) => (
              <div>
                <h1 className="font-bold text-3xl sm:text-5xl">
                  {category.name}
                </h1>
                <p className="text-neutral-400 w-[50%] mt-4 hidden lg:block">
                  {category.quote}
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className=" border-t dark:border-t-neutral-700">
        <div className="container mx-auto px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 py-8 lg:col-span-8 lg:border-r dark:border-r-neutral-700">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <Categories styles={''} />
            </div>
          </div>
        </div>
      </div>
    </div>
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
