import Avatar from '../components/avatar'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, author }) {
  return (
    <>
      <div className="flex h-96 min-h-full items-center justify-center">
        <div className="lg:w-3/4">
          <PostTitle>{title}</PostTitle>
        </div>
      </div>
      
      <div className="flex h-40 items-center justify-center min-w-full">
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </>
  )
}
