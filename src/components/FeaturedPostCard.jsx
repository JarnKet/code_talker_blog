import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="py-1 ">
    <div className="flex items-center mb-2 ">
      <Image
        alt={post.author.name}
        height={30}
        width={30}
        className="mr-2 align-middle rounded-full drop-"
        src={post.author.photo.url}
      />
      <Link
        href={`/author/${post.author.slug}`}
        className="text-neutral-600 dark:text-neutral-400 hover:font-semibold"
      >
        {post.author.name}
      </Link>
    </div>
    <Link href={`/post/${post.slug}`}>
      <h1 className="font-bold cursor-pointer lg:text-lg">{post.title}</h1>
    </Link>
    <small className="text-neutral-600 dark:text-neutral-400">
      {moment(post.createdAt).format('MMM DD, YYYY')}
    </small>
  </div>
);

export default FeaturedPostCard;
