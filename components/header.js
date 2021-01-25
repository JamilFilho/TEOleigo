import Link from 'next/link'
import Headroom from 'react-headroom'

export default function Header() {
  return (
    <div className="w-screen bg-white dark:bg-gray-900 h-20 flex items-center z-900 fixed top-0 left-0 border-b-2 border-gray-100 dark:border-gray-800 pl-9 pr-9 lg:pl-16 lg:pr-16">
      <h2 className="text-lg lg:text-2xl font-bold tracking-tight md:tracking-tighter">
        <Link href="/">
          <a className="hover:underline dark:text-gray-300">TEOleigo</a>
        </Link>
      </h2>
    </div>
  )
}
