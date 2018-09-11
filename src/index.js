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

    var values = [];
    indices.sort(function(a,b){return a-b})
    for(let val of indices)
    {
      values[values.length] = this.bag[val]
    }
    if(this.comparator == undefined)
    {
      values.sort(function(a,b){return a-b})
    }
    else
    {
      values.sort(this.comparator)
    }
    for(let i = 0;i < indices.length;i++)
    {
      this.bag[indices[i]] = values[i]
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction
  }
}

module.exports = Sorter;