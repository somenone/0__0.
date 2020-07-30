class name {
  constructor(first='',last=''){
    this.first = first
    this.last = last
  }
}

let get = function (){
  return `${this.first} ${this.last}`
}
name.prototype.$get = get

let a = new name("a","b")
let b = new name("c")
console.log(a.$get());
console.log(b.$get());
