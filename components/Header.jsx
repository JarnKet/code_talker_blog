import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  SunIcon,
  MoonIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-6 h-6 "
          onClick={() => {
            setTheme('light');
          }}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-6 h-6 "
          onClick={() => {
            setTheme('dark');
          }}
        />
      );
    }
  };

  return (
    <nav className="border-b dark:border-b-neutral-700 card dark:cardDark">
      <div className="container mx-auto py-2 lg:py-4 px-8 lg:px-10 flex justify-between items-center w-full">
        <div>
          <Link href="/">
            <span className="font-sourceCode flex justify-center items-center   cursor-pointer font-bold text-2xl sm:text-4xl transition-all ease-linear duration-200">
              <CodeBracketIcon className="w-12 h-12 mr-2" />
              <h1 className="hidden lg:block">CODE TALKER</h1>
            </span>
          </Link>
        </div>

        <button
          className=" p-2 cursor-pointer flex rounded-full justify-end items-center bg-black dark:bg-white text-white dark:text-black transition-all duration-500 hover:scale-110"
          type="button"
        >
          {renderThemeChanger()}
        </button>
      </div>
    </nav>
  );
};

export default Header;
