import FactoryDashboard from '@/components/FactoryDashboard'


export default function Factory() {
return <FactoryDashboard />
}
export default function FactoryDashboard() {
return (
<div className="p-10">
<h1 className="text-4xl">Virtual Factory</h1>
<ul className="mt-6">
<li>✔ Order Queues</li>
<li>✔ Manufacturing Status</li>
<li>✔ Cost Estimation</li>
<li>✔ Logistics</li>
</ul>
</div>
)
}