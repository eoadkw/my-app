import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import headimg from '../../public/logo-ipsum.png'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Trip</title>
        <meta name="description" content="Travel" />
        <meta name="author" content="Leegunwoo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col bg-gray-200">
        <header className=" flex px-10 py-2">
          <Image
            src={headimg}
            width={150}
            height={110}
            className="mr-16"
          ></Image>
          <nav className="flex items-center">
            <Link
              href="/"
              className="text-2xl mr-8 text-slate-500 hover:text-black"
            >
              개인프로젝트 바로가기
            </Link>
            <Link
              href={'https://portfolio1-emzrhyq9r-lgw7537.vercel.app/'}
              className="text-2xl mr-8 text-slate-500 hover:text-black"
            >
              이건우
            </Link>
            <Link
              href={'https://my-blog-nine-khaki.vercel.app/'}
              className="text-2xl mr-8 text-slate-500 hover:text-black"
            >
              어영민
            </Link>
            <Link
              href={'https://jin-blog-topaz.vercel.app/'}
              className="text-2xl mr-8 text-slate-500 hover:text-black"
            >
              박성진
            </Link>
            <Link
              href="javascript:alert('개인 프로젝트 미참여');"
              className="text-2xl mr-8 text-slate-500 hover:text-black"
            >
              이종민
            </Link>
          </nav>
        </header>
        <hr />
      </div>

      <main className="my-auto">{children}</main>

      <footer className="flex h-20 justify-center items-center shadow-inner bg-white">
        <p>Copyright &copy; 2022 Travel by Teamproject 5nd</p>
      </footer>
    </>
  )
}
