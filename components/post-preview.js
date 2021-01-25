import Link from 'next/link'

export default function PostPreview({
  title,
  excerpt,
  slug,
}) {
  return (
    <div>
      <h3 className="text-3xl mb-6 leading-snug font-black dark:text-gray-300">
        <Link as={`/${slug}`} href="/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed dark:text-gray-500">{excerpt}</p>
    </div>
  )
}
