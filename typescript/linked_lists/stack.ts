class StackNode<T> {
  value: T;
  next: StackNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  head: StackNode<T> | null;

  constructor() {
    this.head = null;
  }

  push(value: T) {
    const newNode: StackNode<T> = { value, next: null };

    newNode.next = this.head;
    this.head = newNode;
  }

  pop() {
    const currHead = this.head;
    this.head = currHead!.next;

    return currHead!.value;
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
