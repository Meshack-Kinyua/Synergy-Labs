import { calculatePrice } from '@/lib/pricing'


export async function POST(req:Request){
const spec = await req.json()
return Response.json({ price: calculatePrice(spec) })
}