export default function Hero() {
return (
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
<h1 className="text-6xl font-bold">AI PCB Virtual Factory</h1>
<p className="mt-6 text-gray-400 max-w-xl">
Describe your circuit. Customize instantly. Manufacture globally.
</p>
<a href="/design" className="mt-8 bg-blue-600 px-8 py-4 rounded-lg">
Start Designing
</a>
</section>
)
}