import Avatar from '../components/avatar'
import PostTitle from '../components/post-title'
import PostExcerpt from '../components/post-excerpt'

export default function PostHeader({ title, author, excerpt }) {
  return (
    <>
      <div className="flex mt-20 lg:mt-40 items-center justify-center border-b-2 dark:border-gray-900 pt-20 pb-10 lg:pt-6 lg:pb-16 px-6">
        <div className="lg:w-3/4">
          <PostTitle>{title}</PostTitle>
          <PostExcerpt>{excerpt}</PostExcerpt>
        </div>
      </div>
      
      <div className="flex h-40 items-center justify-center min-w-full">
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </>
  )
}
