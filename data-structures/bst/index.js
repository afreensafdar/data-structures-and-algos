class BinarySearchTree {
  constructor (value) {
    this.value = value 
    this.left = null
    this.right = null
  }

  insert(value){
    if(value < this.value){
      //left side
      if(this.left){
        this.left.insert(value)
      } else {
        let node = new BinarySearchTree(value)
        this.left = node
      }
    } else {
      //right side
      if(this.right){
        this.right.insert(value)
      } else {
        let node = new BinarySearchTree(value)
        this.right = node
      }
    }

  }

  contains(value){
    if(value == this.value){
      return true
    } else if( value < this.value){
      //left side
      if(this.left){
        this.left.contains(value)
      } else {
        return false
      }
    } else {
      // right side
      if(this.right){
        this.right.contains(value)
      } else {
        return false
      }
    }
  }
}

module.exports = BinarySearchTree