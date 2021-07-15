Class Stack {

  constructor() {
    this.storage = {};
    this.currentIndex = 0;
  }

  push(item) {
    this.storage[this.currentIndex] = item;
    this.currentIndex++;
  }

  pop() {
    if (this.currentIndex === 0) {
      return null;
    }
    let result;
    this.currentIndex--;
    result = this.storage[this.currentIndex];
    delete this.storage[currentIndex];
    return result;
  }

  size() {
    return this.currentIndex;
  }
}