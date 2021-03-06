import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import PostBody from '../components/post-body'
import Header from '../components/header'
import PostHeader from '../components/post-header'
import Layout from '../components/layout'
import { getPostBySlug, getAllPosts } from '../lib/api'
import PostTitle from '../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'
import ShareButtons from '../components/sharer'
import ArticleComments from '../components/comments'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
    <Head>
      <title>
        {post.title} | {CMS_NAME}
      </title>
      
      <meta name="description" content={post.excerpt}/>

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

      <meta property="og:image" content={post.ogImage.url} />

      <script src="/assets/scripts/sharer.js" />
      {/* <script data-ad-client="ca-pub-8744567957048944" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/> */}
    </Head>
    <Layout>
      <Header />
      <Container>
        {router.isFallback ? (
          <PostTitle>Carregando</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                author={post.author}
                excerpt={post.excerpt}
              />
              <PostBody content={post.content} />
              <ShareButtons url={post.slug} title={post.title}/>
            </article>
          </>
        )}
      </Container>
      <ArticleComments url={post.slug} />
    </Layout>
  </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'excerpt',
    'slug',
    'author',
    'content',
    'ogImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
