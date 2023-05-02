type One = string
type Two = string | number
type Three = 'hello'

//*Convert to more or less specific 
let a: One = 'hello'
let b = a as Two //less specific
let c = a as Three //more specific

//another way
//? Cannot be used in .tsx file 
let d = <One> 'world'
let e = <string|number>"world"

