import Link from 'next/link'
import Layout from '../components/Layout'

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const basepath = publicRuntimeConfig.basePath || "";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about" as={`${basepath}/about`}>
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
