export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
      <h1 className="text-7xl font-extrabold tracking-tight">
        Design PCBs with AI
      </h1>

      <p className="mt-6 text-xl text-gray-400 max-w-2xl">
        From idea → schematic → layout → manufacturing in minutes.
      </p>

      <div className="mt-10 flex gap-6">
        <a
          href="/design"
          className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl text-lg"
        >
          Start Designing
        </a>

        <a
          href="/factory"
          className="border border-gray-600 px-8 py-4 rounded-xl text-lg"
        >
          Virtual Factory
        </a>
      </div>
    </section>
  )
}
