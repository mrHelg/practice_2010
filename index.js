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
  
  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

const linkedList1 = new LinkedList(true);
const linkedList2 = new LinkedList(1, true, {}, 'qwerty', 55);
console.log(...linkedList2);
