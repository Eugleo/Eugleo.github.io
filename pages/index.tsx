import Head from 'next/head';
import React, { useEffect } from 'react';

function Link({ to, children }: { to: string; children: string }) {
  return (
    <a href={to} className="capitalize hover:text-blue-500 text-gray-600 transform duration-100">
      &gt; {children}
    </a>
  );
}

export default function Home() {
  useEffect(() => {
    document.documentElement.lang = 'cs';
  });
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Head>
        <title>Evžen Wybitul | Personal website and portfolio</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#38a169" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#38a169" />
      </Head>

      <main className="min-h-screen mx-auto flex flex-col justify-center items-center w-full">
        <div className="px-10 py-8 max-w-lg mx-4 rounded-lg shadow-xs bg-white">
          <h1 className="text-4xl font-black mb-6 text-center w-full sm:text-left ">
            Evžen
            <span className="text-blue-500"> :: Dev</span>
          </h1>

          <h2 className="text-gray-600 mb-2">
            This site is under construction, but in the meantime, here are some useful links
          </h2>

          <div className="grid gap-2 grid-rows-4">
            <Link to="https://github.com/Eugleo">GitHub</Link>
            <Link to="mailto:wybitul@evzen.dev">E-Mail</Link>
            <Link to="teaching/2020-2021/prog1">Programming I</Link>
            <Link to="teaching/2020-2021/prog2">Programming II</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
