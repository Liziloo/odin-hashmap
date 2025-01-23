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
        if (!this.buckets[hash]) {
            const newLinkedList = new LinkedList();
            this.buckets[hash] = newLinkedList;
        }
        this.buckets[hash].append({key: value});
    }
}

const newHash = new HashMap();

newHash.set('me', 'girl');
newHash.set('Hans', 'boy')

console.log(newHash);