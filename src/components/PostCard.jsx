import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col items-center justify-between p-4 mb-12 lg:p-8 lg:flex-row rounded-2xl themeComponentRevert">
      <div className="relative flex items-center justify-center w-full mb-6 ml-2 lg:hidden">
        <Image
          alt={post.title}
          src={post.featuredImage.url}
          width={400}
          height={400}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="w-full lg:w-[60%] ">
        <div className="flex items-center mb-2 ">
          <Image
            alt={post.author.name}
            height={30}
            width={30}
            className="mr-2 align-middle rounded-full"
            src={post.author.photo.url}
          />
          <Link
            href={`/author/${post.author.slug}`}
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:font-semibold"
          >
            {post.author.name}
          </Link>
        </div>
        <Link href={`/post/${post.slug}`}>
          <h1 className="font-bold cursor-pointer lg:text-xl">{post.title}</h1>
        </Link>
        <p className="hidden text-neutral-600 dark:text-neutral-400 lg:block">
          {post.excerpt}
        </p>
        <small className="text-neutral-700 dark:text-neutral-500 ">
          {moment(post.createdAt).format("DD MMM, YYYY")}
        </small>
      </div>
      <div className="w-[40%] ml-2 relative hidden lg:flex items-center justify-center">
        <Image
          alt={post.title}
          src={post.featuredImage.url}
          width={400}
          height={400}
          className="object-cover rounded-2xl"
        />
      </div>
      <p className="block my-4 lg:hidden text-neutral-600 dark:text-neutral-400">
        {post.excerpt.split(" ").slice(0, 5).join(" ") + "..."}
      </p>
      <Link
        className="w-full p-4 font-semibold text-center transition-all duration-300 rounded-2xl lg:hidden themeComponent lg:text-xl hover:scale-110"
        href={`/post/${post.slug}`}
      >
        ອ່ານຕໍ່
      </Link>
      <div className="overlay dark:overlayDark" />
    </div>
  );
};

export default PostCard;
