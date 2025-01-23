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

    set(key, value) {
        const hashValue = this.hash(key);
        if (hashValue < 0 || hashValue >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
          }
          
        if (!this.buckets[hashValue - 1]) {
            const newLinkedList = new LinkedList();
            this.buckets[hashValue - 1] = newLinkedList;
        }
        this.buckets[hashValue - 1].append(key, value);
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
            return null;
        }
        return requestedList.contains(key);
    }

    remove(key) {
        const hashValue = this.hash(key);
        const requestedList = this.buckets[hashValue - 1];
        if (requestedList) {
            return requestedList.remove(key);
        }
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
            const currentNode = this.buckets[i];
            if (currentNode) {
                allKeys.push(...currentNode.keys());
            }
        }
        return allKeys;
    }
}

const newHash = new HashMap();
newHash.loadFactor = 0.75;

newHash.set('me', 'girl');
newHash.set('Hans', 'boy');
newHash.set('Oak', 'boy');
newHash.set('Finnick', 'boy');


console.log(newHash.keys());