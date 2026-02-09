import DesignForm from '@/components/DesignForm'
import Viewer from '@/components/Viewer'

import SchematicEditor from '@/components/SchematicEditor'

<SchematicEditor />

export default function DesignPage() {
return (
<div className="grid md:grid-cols-2 min-h-screen">
<DesignForm />
<Viewer />
</div>
)
}