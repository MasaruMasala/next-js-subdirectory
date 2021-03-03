import Link from 'next/link'
import Layout from '../components/Layout'

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const basepath = publicRuntimeConfig.basePath || "";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/" as={`${basepath}/`}>
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
