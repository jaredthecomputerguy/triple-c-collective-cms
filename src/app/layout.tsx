import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Montserrat } from "next/font/google";
import { type Metadata } from "next";
import Image from "next/image";

import logoImg from "../../public/logo.png";
import Link from "next/link";
import { SignInButton, SignOutButton } from "./auth-buttons";
import { getServerAuthSession } from "@/server/auth";

export const metadata: Metadata = {
  title: "Triple C CMS",
  description: "A CMS System for Triple C Collective's Website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuthSession();

  return (
    <html lang="en" className={`${GeistSans.variable} bg-black/90 text-white`}>
      <body className="page-container">
        <header
          className={`${montserrat.className} container mx-auto flex items-center justify-between py-4`}
        >
          <Link href="/" className="h-fit">
            <span className="flex items-center gap-x-2 rounded px-2 text-4xl font-semibold hover:bg-white/10">
              <Image src={logoImg} alt="logo" width={75} height={75} />
              Triple C Collective CMS
            </span>
          </Link>
          <nav className="flex items-center gap-x-4">
            {session ? <SignOutButton /> : <SignInButton />}
          </nav>
        </header>
        <main className="content-wrap">{children}</main>
        <footer className="footer flex items-center justify-center">
          <span className="flex text-sm">
            All Rights Reserved 2023 | Created by
            <a
              href="https://jaredthecomputerguy.dev"
              target="_blank"
              className="-ml-1"
            >
              Jared Mercer
            </a>
          </span>
        </footer>
      </body>
    </html>
  );
}
