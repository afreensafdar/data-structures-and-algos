/*Summary
A queue is a particular kind of abstract data type or collection 
in which the entities in the collection are kept in order and 
the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element 
added to the queue will be the first one to be removed.
 */
class Queue {
	// Your code below!

		constructor() {
			this.size=0;
			this.front = null;
			this.back = null;
		  }
		
		  enqueue( value ) {
			const newNode = {
			  value,
			  next: null,
			  
			};
			if ( !this.front ) {
			  this.back = newNode;
			  this.front = this.back;
			  this.size++;
			} else {
			  this.back.next = newNode;
			  this.back = newNode;
			
			}
		  }
		
		  dequeue() {
			if ( this.front ) {
			  const value = this.front.value;
			  this.front = this.front.next;
			  this.size -= 1;
			  return value;
			 
			}
			return null;
		  }
		
	}


module.exports = Queue

//====Dan Approach ======
class Queue {
	constructor() {
		this.items = []
		this.size = 0
	}

	enqueue(item){
		this.size++
		this.items = [...this.items, item]
	}

	dequeue(){
		this.size--
		let item = this.items[0]
		this.items = this.items.slice(1)
		return item
	}
}

module.exports = Queue