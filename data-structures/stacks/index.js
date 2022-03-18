
	// Your code below!
	/* Summary 
	Stack is Last item in and first item out .(LIFO)
	1- Create a new stack .
	2- Stack size is empty -initiliase to 0 .
	3- Push method- to add items in stack ,size increases.
	4- Pop method - to remove items from stack ,size decreases.
	the most recently added element that was not yet removed

	Examples 
    Push( value)
	Charlie brown-3  Last add //size -3 push('Charlie brown')
	Woodstick- 2 Second add ,size -2  push('Woodstick')
	Snoopy -  1 First add ,size -1   push('snoopy')
	initial empty size 0

	Pop ()
	Charlie Brown - // decrease size ,so 2

	left in stack
	Woodstick
	Snoopy  // size total -2 
	*/

	//Approach 

	class Stack{
	constructor(){
		this.size = 0;
		this.top = null; 
	}
  
	push( value ) {
	  const newNode = {
		value,
		next: this.top,
	  };
	  this.top = newNode;
	  this.size++;
	}
  
	pop() {
	  if ( this.top !== null ) {
		const value = this.top.value;
		this.top = this.top.next;
		this.size--;
		return value;
		//console.log("value is"+value);
	  }
	  return null;
	}
	
	}

module.exports = Stack

//=====Dan Approach =====
class Stack{
	constructor(){
		this.size = 0
		this.items = []
	}

	push(item){
		this.size++
		this.items = [item, ...this.items]
	}

	pop(){
		this.size--
		let first = this.items[0]
		this.items = this.items.slice(1)
		return first
	}

}

module.exports = Stack
