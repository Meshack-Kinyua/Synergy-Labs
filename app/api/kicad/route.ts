import { exec } from 'child_process'


export async function POST(req: Request) {
const spec = await req.json()


return new Promise((resolve) => {
exec(`python workers/kicad_worker.py '${JSON.stringify(spec)}'`, () => {
resolve(Response.json({ success: true }))
})
})
}