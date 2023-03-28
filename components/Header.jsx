import { useTheme } from 'next-themes';

import Link from 'next/link';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button
          type="button"
          className="rounded-full p-2 cursor-pointer flex  justify-end items-center bg-black dark:bg-white text-white dark:text-black transition-all duration-500"
        >
          <SunIcon
            className="w-6 h-6 "
            onClick={() => {
              setTheme('light');
            }}
          />
        </button>
      );
    } else {
      return (
        <button
          className="rounded-full p-2 cursor-pointer flex  justify-end items-center bg-black dark:bg-white text-white dark:text-black transition-all duration-500"
          type="button"
          onClick={() => {
            setTheme('dark');
          }}
        >
          <MoonIcon className="w-6 h-6 " />
        </button>
      );
    }
  };

  return (
    <nav className=" mt-6 rounded-xl container mx-auto px-8  w-full  ">
      <div className=" card dark:cardDark  py-4 px-2  rounded-xl   flex justify-between items-center w-full">
        <div>
          <Link href="/">
            <span className="font-sourceCode  cursor-pointer font-bold text-2xl sm:text-4xl transition-all ease-linear duration-200">
              CODE TALKER
            </span>
          </Link>
        </div>

        {renderThemeChanger()}
      </div>
    </nav>
  );
};

export default Header;
