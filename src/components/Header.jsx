import { useTheme } from 'next-themes';
import Link from 'next/link';
import { SunIcon, MoonIcon, CodeBracketIcon } from '@heroicons/react/24/solid';
import { staticNavLinks } from '../constants';
const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

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
    <nav className="border-b dark:border-b-neutral-700 card dark:cardDark">
      <div className="container flex items-center justify-between w-full px-8 py-2 mx-auto lg:py-4 lg:px-10">
        <div>
          <Link href="/">
            <span className="flex items-center justify-center text-2xl font-bold transition-all duration-200 ease-linear cursor-pointer font-sourceCode sm:text-4xl">
              <CodeBracketIcon className="w-12 h-12 mr-2" />
              <h1 className="hidden lg:block">CODE TALKER</h1>
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <ul className="mr-8">
            {staticNavLinks.map((link, index) => (
              <Link
                href={link.href}
                className="hover:font-semibold"
                key={index}
              >
                {link.title}
              </Link>
            ))}
          </ul>
          {renderThemeChanger()}
        </div>
      </div>
    </nav>
  );
};

export default Header;
