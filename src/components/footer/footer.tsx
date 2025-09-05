import React from 'react';
import { config } from '../../../config';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="pb-4 px-4 md:px-8 pt-8 bg-slate-100 dark:bg-slate-900">
      <div className="mx-auto max-w-screen-xl text-center">
        {/* Branding */}
        <Link
          href={config.footer.brandingURL ?? '#'}
          className="flex justify-center items-center gap-2 text-2xl font-semibold text-slate-900 dark:text-white"
        >
          {config.logoURL && (
            <Image
              src={config.logoURL}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
          )}
          {config.footer.brandingName ?? config.site.title}
        </Link>

        {/* Links */}
        <ul className="my-6 flex flex-wrap justify-center items-center text-slate-700 dark:text-slate-300">
          {config.footer.links?.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className="mr-4 hover:underline md:mr-6"
                target={link.openInNewTab ? '_blank' : undefined}
                rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <span className="text-sm text-slate-500 dark:text-slate-400 block">
          ©{' '}
          { !config.footer.initialCopyrightYear || config.footer.initialCopyrightYear === new Date().getFullYear()
            ? new Date().getFullYear()
            : `${config.footer.initialCopyrightYear}-${new Date().getFullYear()}`
          }{' '}
          <Link
            href={config.footer.copyrightBrandUrl ?? '#'}
            className="hover:underline"
          >
            {config.footer.copyrightBrandName ?? config.site.title}
          </Link>
          . All Rights Reserved.
        </span>

        {/* Created by */}
        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Created with ❤️ by{' '}
          <Link
            href="https://mirasaki.dev"
            className="hover:underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mirasaki Development
          </Link>
        </div>

        {/* Trademark */}
        <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
          {config.footer.trademarkNotice}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
