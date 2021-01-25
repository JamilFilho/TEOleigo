import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import fs from 'fs'
import {generateRss} from '../lib/feed.js'

export default function Index({ allPosts }) {
  const morePosts = allPosts
  return (
    <>
      <Head>
        <title>{CMS_NAME} | Discussões teológicas de um leigo na internet</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#CC0000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#CC0000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#CC0000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta name="description" content="Discussões teológicas de um leigo na internet"/>

        {/* <script data-ad-client="ca-pub-8744567957048944" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/> */}
      </Head>
      <Layout>
        <Container>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
    'content'
  ])
  const rss = await generateRss(allPosts)
  fs.writeFileSync('./public/feed.xml', rss)

  return {
    props: { allPosts },
  }
}
