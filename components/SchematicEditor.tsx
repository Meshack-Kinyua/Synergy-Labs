'use client'
import ReactFlow, { MiniMap, Controls } from 'reactflow'
import 'reactflow/dist/style.css'


export default function SchematicEditor() {
return (
<div style={{ height: '600px' }}>
<ReactFlow nodes={[]} edges={[]}>
<MiniMap />
<Controls />
</ReactFlow>
</div>
)
}