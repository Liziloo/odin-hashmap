import { LinkedList } from "./linkedList.js";

class HashMap {
    constructor() {
        this.loadFactor = null;
        this.capacity = 16;
        this.buckets = [];
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    resize() {
        const existingEntries = this.entries();
        this.capacity = this.capacity * 2;
        this.clear();
        for (let entry of existingEntries) {
            this.set(entry[0], entry[1]);
        }
    }

    set(key, value) {
        const hashValue = this.hash(key);
        const requestedList = this.buckets[hashValue - 1];
        if (requestedList && requestedList.contains(key)) {
            requestedList.changeValue(key, value);
            return
        }
        if (this.length() + 1 > this.loadFactor * this.capacity) {
            this.resize();
        }
        const newHashValue = this.hash(key);
        if (newHashValue < 0 || newHashValue >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
          }
        if (!this.buckets[newHashValue - 1]) {
            const newLinkedList = new LinkedList();
            this.buckets[newHashValue - 1] = newLinkedList;
        }
        this.buckets[newHashValue - 1].append(key, value);
    }

    get(key) {
        const hashValue = this.hash(key);
        const requestedList = this.buckets[hashValue - 1];
        if (!requestedList) {
            return null
        }
        return requestedList.find(key);
    }

    has(key) {
        const hashValue = this.hash(key);
        const requestedList = this.buckets[hashValue - 1];
        if (!requestedList) {
            return false;
        }
        return requestedList.contains(key);
    }

    remove(key) {
        const hashValue = this.hash(key);
        const requestedList = this.buckets[hashValue - 1];
        if (requestedList) {
            return requestedList.remove(key);
        }
        return false
    }

    length() {
        let counter = 0;
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                counter += this.buckets[i].size();
            }
        }
        return counter;
    }

    clear() {
        this.buckets = [];
    }

    keys() {
        const allKeys = [];
        for (let i = 0; i < this.buckets.length; i++) {
            const currentList = this.buckets[i];
            if (currentList) {
                allKeys.push(...currentList.keys());
            }
        }
        return allKeys;
    }

    values() {
        const allValues = [];
        for (let i = 0; i < this.buckets.length; i++) {
            const currentList = this.buckets[i];
            if (currentList) {
                allValues.push(...currentList.values());
            }
        }
        return allValues;
    }

    entries() {
        const allEntries = [];
        for (let i = 0; i < this.buckets.length; i++) {
            const currentList = this.buckets[i];
            if (currentList) {
                allEntries.push(...currentList.entries());
            }
        }
        return allEntries;
    }
}

const test = new HashMap();
test.loadFactor = 0.75;

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


test.set('grape', 'green')
test.set('banana', 'brown')
test.set('elephant', 'rainbow')


test.set('moon', 'silver')

test.set('moon', 'yellow');
test.set('kite', 'aqua');

console.log(test.remove('moon'));
console.log(test.entries());
console.log(test.length());