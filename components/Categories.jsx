import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = ({ styles }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className={`${styles} rounded-xl shadow-lg p-8 mb-8 pb-12`}>
      <h3 className="text-xl mb-8 font-semibold border-b-2 border-neutral-900 dark:border-white  pb-4">
        📖 ໝວດໝູ່
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
