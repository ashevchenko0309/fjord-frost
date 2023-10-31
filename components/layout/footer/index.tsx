import { BlackLogo } from '../../icons/logo';
import Link from 'next/link';

const { SITE_NAME } = process.env;

const Footer = () => {
  return (
    <footer className="bg-primary-main py-12 xl:py-16">
      <div className="mx-auto w-48 md:w-full md:px-12 lg:px-24 xl:px-28">
        <Link href="/" className="mb-6 flex w-full items-center justify-center gap-2 md:mb-8">
          <BlackLogo className="h-10 w-10 md:h-12 md:w-12" />
          <div className="flex-none font-header text-2xl md:text-3xl font-semibold text-neutral-100">
            {SITE_NAME}
          </div>
        </Link>
        <nav className="mb-14 xl:mb-16">
          <ul className="space-y-3 text-center md:flex md:justify-center md:items-center md:space-y-0 md:gap-8 md:text-lg">
            <li className="font-medium leading-6 text-neutral-80">
              <Link href="#">About</Link>
            </li>
            <li className="font-medium leading-6 text-neutral-80">
              <Link href="#">Features</Link>
            </li>
            <li className="font-medium leading-6 text-neutral-80">
              <Link href="#">Products</Link>
            </li>
            <li className="font-medium leading-6 text-neutral-80">
              <Link href="#">Skin care</Link>
            </li>
          </ul>
        </nav>
        <hr className="mx-auto mb-8 w-2/3 border-neutral-80 lg:w-full" />
        <div className="flex flex-col lg:flex-row-reverse justify-between">
          <div className="mb-4 md:mb-6 lg:mb-0">
            <ul className="flex items-center justify-between text-sm leading-5 md:flex md:justify-center md:gap-6 md:text-base">
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Privacy</Link>
              </li>
              <li>
                <Link href="#">Cookies</Link>
              </li>
            </ul>
          </div>
          <div className="text-center text-sm leading-5">
            &copy; {new Date().getFullYear()} Frost & Fjord. <br className="md:hidden" />
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
