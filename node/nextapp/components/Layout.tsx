import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const basepath = publicRuntimeConfig.basePath || "";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/" as={`${basepath}/`}>
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about" as={`${basepath}/about`}>
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users" as={`${basepath}/users`}>
          <a>Users List</a>
        </Link>{' '}
        | <a href={`${basepath}/api/users`}>Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
