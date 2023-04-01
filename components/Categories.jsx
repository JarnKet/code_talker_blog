import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getCategories } from '../services';

const Categories = ({ styles }) => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div
      className={`${styles} rounded-xl shadow-lg p-8 mb-8 pb-12 hover:scale-105 transition-all ease-in-out duration-500`}
    >
      <h3 className="text-xl mb-8 font-semibold border-b-2 border-neutral-900 dark:border-white  pb-4">
        📖 ໝວດໝູ່
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block pb-3 mb-3 ${
              router.asPath === `/category/${category.slug}`
                ? 'text-gradient font-bold'
                : ''
            } hover:text-gradient hover:font-bold`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
