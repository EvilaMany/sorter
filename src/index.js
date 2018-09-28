class Sorter {

  constructor() {
    this.bag = []
  }

  add(element) {
    this.bag[this.bag.length] = element
  }

  at(index) {
    return this.bag[index]
  }

  get length() {
    return this.bag.length
  }

  toArray() {
    return this.bag
  }

  sort(indices) {

    let values = [];
    indices.sort( (a,b)=>a-b )

    indices.forEach((item,i,indices)=>
      values.push(this.bag[item])
    )

    if(this.comparator == undefined) 
      this.comparator = (a,b) => a-b
    values.sort(this.comparator)
    
    indices.forEach((item,i,indices)=>
      this.bag[item] = values[i]
    )
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction
  }
}

module.exports = Sorter;