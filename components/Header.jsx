import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="w-full mb-8 bg-white border-b-4 border-cyan-300">
      <div className=" w-full inline-block  py-4 px-8 text-center">
        <div className="block mb-4">
          <Link href="/">
            <span className="banner_font cursor-pointer font-bold text-4xl text-black hover:text-cyan-300 transition-all ease-linear duration-200">
              CODE TALKER
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className=" mt-2 align-middle text-black ml-4 font-semibold cursor-pointer hover:border-b-2 hover:border-cyan-300 transition-all ease-linear duration-200">
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
