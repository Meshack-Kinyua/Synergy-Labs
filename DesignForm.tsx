'use client'
import { useState } from 'react'


export default function DesignForm() {
const [prompt, setPrompt] = useState('')
const [result, setResult] = useState('')


async function generate() {
const res = await fetch('/api/ai', {
method: 'POST',
body: JSON.stringify({ prompt })
})
const data = await res.json()
setResult(data.text)
}


return (
<div className="p-10">
<h2 className="text-2xl mb-4">Describe Your PCB</h2>
<textarea
className="w-full h-40 text-black p-3"
value={prompt}
onChange={e => setPrompt(e.target.value)}
/>
<button onClick={generate} className="mt-4 bg-green-600 px-6 py-3">
Generate
</button>


<pre className="mt-6 bg-gray-900 p-4">{result}</pre>
</div>
)
}