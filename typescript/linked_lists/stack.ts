class StackNode<T> {
  value: T;
  prev: StackNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.prev = null;
  }
}

class Stack<T> {
  tail: StackNode<T> | null;

  constructor() {
    this.tail = null;
  }

  push(value: T) {
    const newNode: StackNode<T> = { value, prev: null };

    if (!this.tail) {
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  pop() {
    const value = this.tail!.value;
    this.tail = this.tail!.prev;

    return value;
  }
}

const executeStack = () => {
  const myStack = new Stack<number>();

  myStack.push(1);
  myStack.push(2);
  myStack.push(3);

  console.log(myStack.pop());
  console.log(myStack.pop());
};

executeStack();
