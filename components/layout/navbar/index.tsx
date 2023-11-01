import Link from 'next/link';
import MobileMenu from './mobile-menu';
import { BlackLogo } from '../../icons/logo';
import {SolidButton, TextButton} from '../../uiKit/Button/Button';

const { SITE_NAME } = process.env;

export default async function Navbar() {
  return (
    <nav className="relative flex items-center justify-between border-b border-primary-surface bg-neutral-10 p-4 lg:px-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex">
          <Link href="/" className="flex w-full items-center justify-start gap-2">
            <BlackLogo className="h-10 w-10" />
            <div className="flex-none font-header text-2xl font-semibold text-neutral-100">
              {SITE_NAME}
            </div>
          </Link>
        </div>
        <ul className="hidden gap-6 font-medium lg:flex lg:items-center">
          <li>
            <Link href="/#about" className="px-3 py-1.5">
              About
            </Link>
          </li>
          <li>
            <Link href="/#futures" className="px-3 py-1.5">
              Futures
            </Link>
          </li>
          <li>
            <Link href="/#products" className="px-3 py-1.5">
              Products
            </Link>
          </li>
          <li>
            <Link href="/#skin-care" className="px-3 py-1.5">
              Skin care
            </Link>
          </li>
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="#">
            <TextButton
              text="Card"
              endIcon={
                <span className="rounded-full bg-primary-background px-2 py-0.5 text-center font-medium text-neutral-50">
                  0
                </span>
              }
            />
          </Link>
            <SolidButton text="Discover" size="small" />
        </div>
      </div>
      <div className="block flex-none lg:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
}
