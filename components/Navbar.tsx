export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/60 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-lg">Synergy Labs</h1>

        <div className="space-x-8 text-gray-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/design" className="hover:text-white">Design</a>
          <a href="/factory" className="hover:text-white">Factory</a>
        </div>
      </div>
    </nav>
  )
}
