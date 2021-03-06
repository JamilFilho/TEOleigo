export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left dark:text-white">
      {children}
    </h1>
  )
}
