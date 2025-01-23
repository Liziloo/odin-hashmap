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
        const hash = this.hash(key);
        console.log('hash', hash);
        if (hash < 0 || hash >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
          }
          
        if (!this.buckets[hash - 1]) {
            const newLinkedList = new LinkedList();
            this.buckets[hash - 1] = newLinkedList;
        }
        this.buckets[hash - 1].append(key, value);
    }

    get(key) {
        const hash = this.hash(key);
        const requestedList = this.buckets[hash - 1];
        if (!requestedList) {
            return null
        }
        return requestedList.find(key);
    }
}

const newHash = new HashMap();

newHash.set('me', 'girl');
newHash.set('Hans', 'boy')

console.log(newHash.get('aha'));

console.log(newHash);