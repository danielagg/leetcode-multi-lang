class Queue<T> {
  head: QueueNode<T> | null;
  tail: QueueNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value: T) {
    const newNode: QueueNode<T> = { value };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue(): T {
    const val = this.head!.value;
    const newHead = this.head!.next!;

    this.head = newHead;

    return val;
  }
}

class QueueNode<T> {
  value: T;
  next?: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

const execute = () => {
  const myQueue = new Queue();
  myQueue.enqueue("test");
  myQueue.enqueue("test2");
  myQueue.enqueue("test3");
  myQueue.enqueue("test4");

  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
};

execute();
