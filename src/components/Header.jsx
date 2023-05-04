import { useTheme } from 'next-themes';
import Link from 'next/link';
import { neoLatinFont } from '../../public/fonts';
import {
  SunIcon,
  MoonIcon,
  CodeBracketIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { staticNavLinks } from '../constants';
import { useRouter } from 'next/router';
import { getCategories } from '../services';
import { useState, useEffect } from 'react';

const Header = () => {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [categoriesToggle, setCategoriesToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button
          className="flex items-center justify-end p-2 text-white transition-all duration-500 bg-black rounded-full cursor-pointer dark:bg-white dark:text-black hover:scale-110"
          type="button"
          onClick={() => {
            setTheme('light');
          }}
          aria-label="theme-toggle"
        >
          <SunIcon className="w-6 h-6 " />
        </button>
      );
    } else {
      return (
        <button
          className="flex items-center justify-end p-2 text-white transition-all duration-500 bg-black rounded-full cursor-pointer dark:bg-white dark:text-black hover:scale-110"
          type="button"
          onClick={() => {
            setTheme('dark');
          }}
          aria-label="theme-toggle"
        >
          <MoonIcon className="w-6 h-6 " />
        </button>
      );
    }
  };

  return (
    <nav className="fixed top-0 z-10 w-full border-b dark:border-b-neutral-700 card dark:cardDark">
      <div className="container flex items-center justify-between w-full px-8 py-2 mx-auto lg:py-4 lg:px-10">
        <div>
          <Link href="/">
            <span className="flex items-center justify-center text-2xl font-bold transition-all duration-200 ease-linear cursor-pointer font-sourceCode sm:text-4xl">
              <CodeBracketIcon className="w-12 h-12 mr-4" />
              <h1 className={`hidden lg:block ${neoLatinFont.className}`}>
                CODE TALKER
              </h1>
            </span>
          </Link>
        </div>

        <div className="items-center justify-center hidden lg:flex">
          <div className="relative flex items-center justify-end flex-1">
            <button
              type="button"
              aria-label="categories-button"
              onClick={() => setCategoriesToggle(!categoriesToggle)}
              className="mr-4 hover:font-semibold"
            >
              ໝວດໝູ່
            </button>

            <div
              className={`${
                !categoriesToggle ? 'hidden' : 'flex'
              } p-6 flex-col absolute top-14 left-10 mx-4 my-2 min-w-[200px] rounded-xl sidebar themeComponent`}
            >
              <button
                className="flex items-center justify-end w-full"
                onClick={() => setCategoriesToggle(!categoriesToggle)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <ul className="flex flex-col items-start justify-end flex-1 w-full h-full list-none">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`hover:border-b font-medium cursor-pointer text-[16px]  ${
                      index === categories.length - 1 ? 'mb-0' : 'mb-4'
                    }`}
                  >
                    <a href={`/category/${category.slug}`}>{category.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="flex mr-4">
            {staticNavLinks.map((link, index) => (
              <li
                className={`${
                  index === staticNavLinks.length - 1 ? '' : 'mr-4'
                } hover:font-semibold ${
                  router.asPath === `${link.href}` ? 'font-bold' : ''
                }`}
                key={index}
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          {renderThemeChanger()}
        </div>
        <div className="flex items-center justify-center lg:hidden">
          {renderThemeChanger()}
          {menuToggle ? (
            <XMarkIcon
              className="w-8 h-8 ml-4"
              onClick={() => setMenuToggle(!menuToggle)}
            />
          ) : (
            <Bars3BottomRightIcon
              className="w-8 h-8 ml-4"
              onClick={() => setMenuToggle(!menuToggle)}
            />
          )}
          <div
            className={`${
              !menuToggle ? 'hidden' : 'flex'
            } p-6 flex-col absolute top-16 right-4  mx-4 my-2 min-w-[200px] rounded-xl sidebar themeComponent `}
          >
            <Link
              href={`/category/`}
              className={`text-xl mb-8`}
              onClick={() => setMenuToggle(!menuToggle)}
            >
              ໝວດໝູ່
            </Link>
            <ul className="flex flex-col items-start justify-end list-none">
              {staticNavLinks.map((link, index) => (
                <li
                  className={`${
                    index === staticNavLinks.length - 1 ? '' : 'mb-8'
                  } hover:font-semibold ${
                    router.asPath === `${link.href}` ? 'font-bold' : ''
                  } text-xl`}
                  key={index}
                  onClick={() => setMenuToggle(!menuToggle)}
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
