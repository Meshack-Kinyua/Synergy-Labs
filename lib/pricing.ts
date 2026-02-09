export function calculatePrice(spec:any){
let base = 20
base += spec.layers * 15
base += spec.area * 0.2
base += spec.quantity * 0.5
return base
}