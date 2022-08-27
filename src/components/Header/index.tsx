import { MenuHamburguer, Navbar, DarkModeButton } from '../../components';
import { useTheme } from 'next-themes';
import { useBreakpoint } from '../../hooks/tailwind';
import Logo from '../../../public/images/logo.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const { theme } = useTheme();
  const isDesktop = useBreakpoint('lg');
  const [logoColor, setLogoColor] = useState('');

  useEffect(
    () => (theme === 'light' ? setLogoColor('#121315') : setLogoColor('#fff')),
    [theme],
  );

  return (
    <header className="mx-8 md:mx-16 mt-8">
      <div className="flex justify-between">
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-center">
            <div className="cursor-pointer mr-16">
              <Logo fill={`${logoColor}`} />
            </div>
            <Navbar />
          </div>
          <div className="flex">
            <button className="text-base xl:text-xl text-white dark:text-dark font-grotesk rounded-xl border-2 border-white dark:border-dark p-3 lg:mx-5 hover:bg-white dark:hover:bg-dark hover:bg-opacity-5 dark:hover:bg-opacity-5 focus:bg-opacity-20 dark:focus:bg-opacity-20">
              Entrar
            </button>
            <DarkModeButton />
            {isDesktop ? null : <MenuHamburguer />}
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
