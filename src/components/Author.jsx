import Image from 'next/image';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/solid';

const Author = ({ author }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full p-8 mb-12 text-center themeComponent">
      <div className="absolute -top-14">
        <Image
          alt={author.name}
          height={100}
          width={100}
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <Link
        href={`/author/${author.slug}`}
        className="my-4 text-lg font-bold hover:border-b-2"
      >
        {author.name}
      </Link>
      <p className="mb-4">{author.bio}</p>
      <button
        className="flex items-center justify-end p-2 transition-all duration-500 rounded-full cursor-pointer hover:scale-110 themeComponentRevert"
        type="button"
        aria-label="link-contact"
      >
        <Link href={author.contactLink} target="_blank">
          <LinkIcon className="w-6 h-6 " />
        </Link>
      </button>
    </div>
  );
};

export default Author;
