import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { getCategories } from '../services';

const Categories = ({ styles }) => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className={`${styles} p-8 mb-12 h-full`}>
      <div className="flex justify-start">
        <ClipboardDocumentIcon className="w-6 h-6 mr-2" />
        <h3 className="text-xl  mb-6 font-semibold   ">ໝວດໝູ່</h3>
      </div>

      <div className="flex flex-wrap w-full gap-y-8 ">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span
              className={`cursor-pointer p-2 rounded-full card dark:cardDark  mr-2 ${
                router.asPath === `/category/${category.slug}`
                  ? '  font-bold'
                  : ''
              }  hover:font-bold`}
            >
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
