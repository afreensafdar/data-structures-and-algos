const Stack = require('./index');

describe('Stack data structure', () => {
	let stack;

	beforeEach(() => {
		stack = new Stack()
	})

	it('has a size of 0 initially', () => {
		expect(stack.size).toBe(0)
	})

	describe('push method', () => {
		
		it('has an push method', () => {
			expect(typeof stack.push).toBe('function')
		})

		it('increases size when item is added', () => {
			stack.push('Snoopy')
			expect(stack.size).toBe(1)
		})


	})

	describe('pop method', () => {
		
		it('has an pop method', () => {
			expect(typeof stack.pop).toBe('function')
		})

		it('decreases size when item is popped', () => {
			stack.push('Snoopy')
			stack.push('Woodstock')
			stack.push('Charlie Brown')
			stack.pop()
			expect(stack.size).toBe(2)
		})

		it('Pop returns items based on first in last out', () => {
			stack.push('first')
			stack.push('second')
			stack.push('third')
			expect(stack.pop()).toBe('third')
		})


	})

}) 