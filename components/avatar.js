export default function Avatar({ name, picture }) {
  return (
    <div className="flex flex-col items-center">
      <img src={picture} className="w-12 h-12 rounded-full mt-4 mb-4" alt={name} />
      <div className="text-xl font-bold dark:text-gray-600">{name}</div>
    </div>
  )
}
