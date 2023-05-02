type One = string
type Two = string | number
type Three = 'hello'

//*Convert to more or less specific type
let a: One = 'hello'
let b = a as Two //less specific
let c = a as Three //more specific

//another way
//? Cannot be used in .tsx file 
let d = <One> 'world'
let e = <string|number>"world"

//narrowing return value with Assertion 
const addOrConcat = (a:number, b:number, c:'add'|"concat") : number | string => {
  if(c==="add") return a + b
  return ""+a+b
}

let myVal : string = addOrConcat(2,2,"concat") as string

//! TS will not see it as error as you specified type. But its ERROR
let nexVal : number = addOrConcat(2,2,"concat") as number