class ListItem {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedListIterator {
  constructor(list) {
    this.list = list;
    this.currentItem = null;
  }

  next() {
    this.currentItem = this.currentItem
      ? this.currentItem.next
      : this.list.head;
    return {
      value: this.currentItem ? this.currentItem.value : undefined,
      done: !this.currentItem,
    };
  }
}

class LinkedList {
  constructor(...args) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    args.every((value) => this.push(value));
  }

  push(value) {
    const newItem = new ListItem(value);
    if (this.length === 0) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    }
    return ++this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.tail.value;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return value;
  }

  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

const linkedList1 = new LinkedList(true, 77);
console.log(...linkedList1);
console.log(linkedList1.pop());
console.log(linkedList1.pop());

const linkedList2 = new LinkedList(1, true, {}, 'qwerty', 55);
console.log(...linkedList2);
console.log(linkedList2.pop());
console.log(linkedList2.pop());
console.log(linkedList2.pop());
console.log(linkedList2.pop());
console.log(linkedList2.pop());
console.log(linkedList2.pop());

const linkedList3 = new LinkedList();
console.log(...linkedList3);
console.log(linkedList3.pop());
