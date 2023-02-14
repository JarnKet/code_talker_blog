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
          className=" p-2 cursor-pointer flex  justify-end items-center hover:bg-white hover:text-black transition-all duration-500"
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
          className=" p-2 cursor-pointer flex  justify-end items-center hover:bg-black hover:text-white transition-all duration-500"
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
    <nav className="py-8 px-12 flex justify-between items-center mb-3 w-full z-10 ">
      <div>
        <Link href="/">
          <span className="font-sourceCode  cursor-pointer font-bold text-2xl sm:text-4xl transition-all ease-linear duration-200">
            CODE TALKER
          </span>
        </Link>
      </div>

      {renderThemeChanger()}
    </nav>
  );
};

export default Header;
