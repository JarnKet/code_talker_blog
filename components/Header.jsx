import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className=" mb-8 container mx-auto  ">
      <div className="  py-8 px-12 text-center">
        <div className="mb-4">
          <Link href="/">
            <span className="banner_font cursor-pointer font-bold text-4xl text-black  transition-all ease-linear duration-200">
              CODE TALKER
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents  ">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className=" mt-2 align-middle text-black ml-4 font-semibold cursor-pointer hover:border-b-4 hover:border-black transition-all ease-linear duration-200">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
