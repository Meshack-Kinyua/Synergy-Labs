import { stripe } from '@/lib/stripe'


export async function POST(){
const session = await stripe.checkout.sessions.create({
mode:'payment',
line_items:[{
price_data:{
currency:'usd',
product_data:{ name:'PCB Order' },
unit_amount:5000
},
quantity:1
}],
success_url:'/',
cancel_url:'/'
})


return Response.json({ url: session.url })
}