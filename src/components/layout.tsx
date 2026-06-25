"use client";
import React from "react";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = "FastBox",
}) => {
  return (
    <div>


      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4A47B2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="font-inter">{children}</main>
    </div>
  );
};